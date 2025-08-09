import { hydrateRoot } from "react-dom/client";
import AppRouter from "./router.tsx";
import "./tw.ts";

if (globalThis.document) {
  hydrateRoot(
    globalThis.document.getElementById("app") as HTMLElement,
    <AppRouter
      ssrPath={globalThis.SSR_PATH || globalThis.location.pathname}
      ssrSearch={globalThis.SSR_SEARCH || globalThis.location.search}
      lang={globalThis.SSR_LANG || "en"}
      baseURL={globalThis.BASE_URL}
    />,
  );
}
