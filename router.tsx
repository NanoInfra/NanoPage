import { Router } from "wouter";
import { I18nProvider } from "./hooks/i18n.tsx";
import { MyPage } from "./pages/page.tsx";
import { baseURL } from "./service.ts";
import { QueryProvider } from "./components/providers/query-provider.tsx";
import { UnheadProvider } from "./components/providers/unhead-provider.tsx";

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
    <UnheadProvider>
      <QueryProvider>
        <I18nProvider lang={lang}>
          <Router ssrPath={ssrPath} ssrSearch={ssrSearch} base={baseURL}>
            <MyPage />
          </Router>
        </I18nProvider>
      </QueryProvider>
    </UnheadProvider>
  );
}
