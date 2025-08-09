import { createHead, UnheadProvider as Provider } from "@unhead/react/client";

const head = createHead({
  init: [
    {
      link: [
        {
          rel: "stylesheet",
          href: "/styles.css",
        },
      ],
    },
  ],
});

export function UnheadProvider({ children }: { children: React.ReactNode }) {
  return <Provider head={head}>{children}</Provider>;
}
