import AppRouter from "./router.tsx";
import {
  createI18nMiddleware,
  Hono,
  readService,
  readTemplate,
  renderAppToString,
  renderTemplate,
  serveDistInDev,
  servePublic,
  startServer,
} from "nanopage/server";
import inline from "@twind/with-react/inline";
import tw from "./tw.ts";

export const i18n = { supportedLanguages: ["en", "zh"], fallbackLanguage: "en" };

const dev = Deno.env.get("DEV") === "true";
const projectRoot = Deno.cwd();
const { service, baseURL } = await readService(projectRoot);
const app = new Hono();

// i18n
app.use(createI18nMiddleware(i18n));

serveDistInDev(app, baseURL, service.name, projectRoot, dev);
servePublic(app, baseURL, projectRoot);

app.get(`${baseURL}/*`, async (c) => {
  const { search } = new URL(c.req.url);
  const lang = c.get("language");
  const body = renderAppToString(
    <AppRouter ssrPath={c.req.path} ssrSearch={search} lang={lang} />,
  );
  const tpl = await readTemplate(projectRoot);
  const html = renderTemplate(tpl, {
    title: c.req.path,
    ssrPath: c.req.path,
    ssrSearch: search,
    lang,
    dev,
    body,
    baseURL,
  });
  const styled = inline(html, tw as unknown as object);
  return c.html(styled);
});

startServer(app);
