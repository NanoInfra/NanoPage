import { Router } from "wouter";
import { I18nProvider } from "./hooks/i18n.tsx";
import { MyPage } from "./pages/page.tsx";
import { baseURL } from "./service.ts";

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
    <I18nProvider lang={lang}>
      <Router ssrPath={ssrPath} ssrSearch={ssrSearch} base={baseURL}>
        <MyPage />
      </Router>
    </I18nProvider>
  );
}
