import {QueryClient} from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 1000,
    },
  },
});

export default queryClient;
