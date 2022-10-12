import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./Query-client";
import {Hydrate} from "@tanstack/react-query/src/Hydrate";

const QueryProvider = ({children}) => {

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        {children}
      </Hydrate>
    </QueryClientProvider>
  )
}

export default QueryProvider;
