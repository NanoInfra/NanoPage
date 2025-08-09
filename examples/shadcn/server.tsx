import { Context, Hono } from "hono";
import { renderToString } from "react-dom/server";
import { languageDetector } from "hono/language";
import { serveStatic } from "hono/deno";
import inline from "@twind/with-react/inline";
import tw from "./tw.ts";
import Mustache from "mustache";

// to read local deno.json
import service, { baseURL } from "./service.ts";

// source deps
import AppRouter from "./router.tsx";

const dev = Deno.env.get("DEV") === "true";

interface TemplateData {
  title: string;
  ssrPath: string;
  ssrSearch: string;
  lang: string;
  dev: boolean;
  body: string;
  baseURL: string;
}

let cachedTemplate: string | null = null;
async function readTemplate(): Promise<string> {
  if (cachedTemplate) return cachedTemplate;
  const file = await Deno.readTextFile(new URL("./index.mustache", import.meta.url));
  cachedTemplate = file;
  return file;
}

export async function renderHTML(data: TemplateData): Promise<string> {
  const template = await readTemplate();
  return Mustache.render(template, data);
}

if (dev) {
  console.log("Running in development mode");
}

const app = new Hono();
app.use(
  languageDetector({
    order: ["querystring", "header", "cookie"],
    convertDetectedLanguage: (lang) => lang.split("-")[0],
    lookupFromPathIndex: 0,
    supportedLanguages: ["en", "zh"], // 必须包含后备语言
    lookupQueryString: "lang",
    fallbackLanguage: "en", // 必需
  }),
);
if (dev) {
  app.get(`${baseURL}/dist/*`, (c: Context, n) => {
    const filePath = c.req.path.replace(`${baseURL}/dist/`, "");
    return serveStatic({ root: `./dist/${service.name}`, path: filePath })(c, n);
  });
}
// Serve any file under ./public at `${baseURL}/*` with SSR fallback when not found
app.get(`${baseURL}/*`, async (c: Context, n) => {
  const publicPath = c.req.path.replace(`${baseURL}/`, "");
  try {
    const stat = await Deno.stat(`./public/${publicPath}`);
    if (stat.isFile) {
      return serveStatic({ root: `./public`, path: publicPath })(c, n);
    }
  } catch (_err) {
    // Not found; fall through to SSR handler
  }
  return n();
});
app.get(`${baseURL}/*`, async (c: Context) => {
  const { search } = new URL(c.req.url);
  const lang = c.get("language");

  // 渲染应用并处理类属性
  const body = renderToString(
    <AppRouter ssrPath={c.req.path} ssrSearch={search} lang={lang} />,
  );

  const html = await renderHTML({
    title: c.req.path,
    ssrPath: c.req.path,
    ssrSearch: search,
    lang,
    dev,
    body,
    baseURL,
  });

  const styled = inline(html, tw);
  return c.html(styled);
});

Deno.serve({
  port: Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8787,
  handler: app.fetch,
});
