import type { Context, Next } from "npm:hono";
import { Hono } from "npm:hono";
import { languageDetector } from "npm:hono/language";
import type { DetectorOptions } from "npm:hono/language";
import { serveStatic } from "npm:hono/deno";
import { renderToString } from "react-dom/server";
import Mustache from "https://esm.sh/mustache@4.2.0";

export type I18nOptions = Partial<DetectorOptions>;

export interface TemplateData {
  title: string;
  ssrPath: string;
  ssrSearch: string;
  lang: string;
  dev: boolean;
  body: string;
  baseURL: string;
}

export async function readService(
  projectRoot = Deno.cwd(),
): Promise<{ service: { name: string }; baseURL: string }> {
  const json = await Deno.readTextFile(`${projectRoot}/service.json`);
  const service = JSON.parse(json) as { name: string };
  const baseURL = `/api/v2/${service.name}`;
  return { service, baseURL };
}

export function createI18nMiddleware(options?: Partial<DetectorOptions>) {
  const defaults: Partial<DetectorOptions> = {
    order: ["querystring", "header", "cookie"],
    convertDetectedLanguage: (lang: string) => lang.split("-")[0],
    lookupFromPathIndex: 0,
    supportedLanguages: ["en", "zh"],
    lookupQueryString: "lang",
    fallbackLanguage: "en",
  };
  return languageDetector({ ...defaults, ...(options || {}) });
}

let cachedTemplate: string | null = null;
export async function readTemplate(projectRoot: string): Promise<string> {
  if (cachedTemplate) return cachedTemplate;
  const file = await Deno.readTextFile(`${projectRoot}/index.mustache`);
  cachedTemplate = file;
  return file;
}

export function renderTemplate(template: string, data: TemplateData): string {
  return Mustache.render(template, data);
}

export function serveDistInDev(
  app: Hono,
  baseURL: string,
  serviceName: string,
  projectRoot: string,
  dev: boolean,
) {
  if (!dev) return;
  app.get(`${baseURL}/dist/*`, (c: Context, n: Next) => {
    const filePath = c.req.path.replace(`${baseURL}/dist/`, "");
    return serveStatic({
      root: `${projectRoot}/dist/${serviceName}`,
      path: filePath,
    })(c, n);
  });
}

export function servePublic(app: Hono, baseURL: string, projectRoot: string) {
  app.get(`${baseURL}/*`, async (c: Context, n: Next) => {
    const publicPath = c.req.path.replace(`${baseURL}/`, "");
    try {
      const stat = await Deno.stat(`${projectRoot}/public/${publicPath}`);
      if (stat.isFile) {
        return serveStatic({ root: `${projectRoot}/public`, path: publicPath })(
          c,
          n,
        );
      }
    } catch (_err) {
      // not found -> continue to SSR
    }
    return n();
  });
}

export function renderAppToString(element: React.ReactElement): string {
  return renderToString(element);
}

export function startServer(
  app: Hono,
  port = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8787,
) {
  return Deno.serve({ port, handler: app.fetch });
}

export { Hono };

// High-level createServer API
export interface CreateServerOptions {
  projectRoot?: string;
  baseURL: string;
  serviceName: string;
  dev?: boolean;
  port?: number;
  i18n?: Partial<DetectorOptions>;
  transformHTML?: (html: string) => Promise<string> | string;
}

export function createServer(options: CreateServerOptions) {
  const {
    projectRoot = Deno.cwd(),
    baseURL,
    serviceName,
    dev = Deno.env.get("DEV") === "true",
    port = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8787,
    i18n,
    transformHTML,
  } = options;

  const app = new Hono();

  // i18n
  app.use(createI18nMiddleware(i18n));

  // static & dist
  serveDistInDev(app, baseURL, serviceName, projectRoot, dev);
  servePublic(app, baseURL, projectRoot);

  async function renderPage(params: {
    title?: string;
    ssrPath: string;
    ssrSearch: string;
    lang: string;
    body: string;
  }): Promise<string> {
    const template = await readTemplate(projectRoot);
    const html = renderTemplate(template, {
      title: params.title ?? params.ssrPath,
      ssrPath: params.ssrPath,
      ssrSearch: params.ssrSearch,
      lang: params.lang,
      dev,
      body: params.body,
      baseURL,
    });
    const finalHtml = transformHTML
      ? await Promise.resolve(transformHTML(html))
      : html;
    return finalHtml;
  }

  function start() {
    return Deno.serve({ port, handler: app.fetch });
  }

  return { app, renderPage, start };
}
