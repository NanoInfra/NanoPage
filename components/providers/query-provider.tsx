import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "../../lib/query-client.ts";

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* 开发环境下显示 DevTools */}
      {typeof window !== "undefined" && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
