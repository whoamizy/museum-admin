import { ReactNode } from "react";
import {
  QueryClient as QueryClientLib,
  QueryClientProvider as QueryClientProviderLib,
} from "@tanstack/react-query";

interface Props {
  children: ReactNode;
}

export const queryClient = new QueryClientLib({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

export const QueryClientProvider = ({ children }: Props) => (
  <QueryClientProviderLib client={queryClient}>
    {children}
  </QueryClientProviderLib>
);
