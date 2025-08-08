import { Context, Hono } from "hono";
import { renderToString } from "react-dom/server";
import { languageDetector } from "hono/language";
import { serveStatic } from "hono/deno";
import inline from "@twind/with-react/inline";
import tw from "./tw.ts";

// to read local deno.json
import { baseURL } from "./service.ts";

// source deps
import AppRouter from "./router.tsx";

export default function RenderHTML(
  { reqPath, search, lang, body, title }: {
    reqPath: string;
    search: string;
    lang: string;
    body: string;
    title?: string;
  },
) {
  return `
  <!DOCTYPE html>
  <html>
      <head>
        <title>${title ? title : reqPath}</title>
        <script lang="javascript">
         globalThis.SSR_PATH = "${reqPath}";
         globalThis.SSR_SEARCH = "${search}";
         globalThis.SSR_LANG = "${lang}";
        </script>
      </head>

      <body>
        <div id="app">${body}</div>
        <script type="module" src="${baseURL}/dist/main.js" />
        <link rel="stylesheet" href="${baseURL}/dist/styles.css" />
      </body>
  </html>`;
}

if (Deno.env.get("DEV")) {
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
if (Deno.env.get("DEV")) {
  app.get(`${baseURL}/dist/*`, (c: Context, n) => {
    const filePath = c.req.path.replace(`${baseURL}/dist/`, "");
    return serveStatic({ root: "./dist/TEMPLATE", path: filePath })(c, n);
  });
}
app.get(`${baseURL}/*`, (c: Context) => {
  const { search } = new URL(c.req.url);
  const lang = c.get("language");

  // 渲染应用并处理类属性
  const body = renderToString(
    <AppRouter ssrPath={c.req.path} ssrSearch={search} lang={lang} />,
  );

  const styled = inline(
    RenderHTML({
      reqPath: c.req.path,
      search,
      lang,
      body,
    }),
    tw,
  );

  return c.html(styled);
});

Deno.serve(
  app.fetch,
);
