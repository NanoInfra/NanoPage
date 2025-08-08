import { hydrateRoot } from "react-dom/client";
import AppRouter from "./router.tsx";
import "./tw.ts";

// deno-lint-ignore no-explicit-any
if ((globalThis as any).document) {
  hydrateRoot(
    // deno-lint-ignore no-explicit-any
    (globalThis as any).document.getElementById("app") as HTMLElement,
    <AppRouter
      // deno-lint-ignore no-explicit-any
      ssrPath={(globalThis as any).SSR_PATH || globalThis.location.pathname}
      // deno-lint-ignore no-explicit-any
      ssrSearch={(globalThis as any).SSR_SEARCH || globalThis.location.search}
      // deno-lint-ignore no-explicit-any
      lang={(globalThis as any).SSR_LANG || "en"}
    />,
  );
}
