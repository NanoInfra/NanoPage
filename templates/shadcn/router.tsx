import { Router } from "wouter";
import { I18nProvider } from "./hooks/i18n.tsx";
import Index from "./pages/index.tsx";
import { QueryProvider } from "./components/providers/query-provider.tsx";

export default function ({
  ssrPath,
  ssrSearch,
  lang,
  baseURL,
}: {
  ssrPath?: string;
  ssrSearch?: string;
  lang?: string;
  baseURL?: string;
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
