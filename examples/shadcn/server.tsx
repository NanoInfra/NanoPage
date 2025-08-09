import AppRouter from "./router.tsx";
import { createServer, I18nOptions, readService, renderAppToString } from "nanopage/server";
import inline from "@twind/with-react/inline";
import tw from "./tw.ts";

const i18n: I18nOptions = {
  supportedLanguages: ["en", "zh"],
  fallbackLanguage: "en",
};

const dev = Deno.env.get("DEV") === "true";
const { service, baseURL } = await readService();
const server = createServer({
  baseURL,
  serviceName: service.name,
  dev,
  i18n,
});

server.app.get(`${baseURL}/*`, async (c) => {
  const { search } = new URL(c.req.url);
  const lang = c.get("language");
  const body = renderAppToString(
    <AppRouter ssrPath={c.req.path} ssrSearch={search} lang={lang} />,
  );
  const html = await server.renderPage({
    title: c.req.path,
    ssrPath: c.req.path,
    ssrSearch: search,
    lang,
    body,
  });
  const styled = inline(html, tw);
  return c.html(styled);
});

server.start();
