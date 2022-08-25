import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./Query-client";

const QueryProvider = ({children}) => {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider;
