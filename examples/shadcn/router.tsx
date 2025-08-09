import { Router } from "wouter";
import { I18nProvider } from "./hooks/i18n.tsx";
import Index from "./pages/index.tsx";
import { baseURL } from "./service.ts";
import { QueryProvider } from "./components/providers/query-provider.tsx";

export default function ({
  ssrPath,
  ssrSearch,
  lang,
}: {
  ssrPath?: string;
  ssrSearch?: string;
  lang?: string;
}) {
  return (
    <QueryProvider>
      <I18nProvider lang={lang}>
        <Router ssrPath={ssrPath} ssrSearch={ssrSearch} base={baseURL}>
          <Index />
        </Router>
      </I18nProvider>
    </QueryProvider>
  );
}
