import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface I18nContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

import * as languages from "@/languages";

export const I18nProvider = ({
  children,
  lang = "en",
}: {
  children: ReactNode;
  lang?: string;
}) => {
  const [l, setLang] = useState(lang);
  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      const translations: Record<string, Record<string, string>> = {
        ...languages,
      };

      let text = translations[l]?.[key] || translations.en[key] || key;

      // Replace parameters if provided
      if (params) {
        Object.entries(params).forEach(([param, value]) => {
          text = text.replace(new RegExp(`\\{${param}\\}`, "g"), String(value));
        });
      }

      return text;
    },
    [l],
  );

  return (
    <I18nContext.Provider value={{ lang: l, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};
