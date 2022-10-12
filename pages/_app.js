import "../styles/index.scss";
import { useState } from "react";
import { ModalProvider } from "../src/Context/ModalContext";
import MyModal from "../src/Components/Moleculas/Modal";
import { QueryClientProvider, Hydrate, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "../src/Context/AuthContext";
import { GlobalContextProvider } from "../src/Context/GlobalContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  console.log("UNDEFINED", pageProps);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalContextProvider>
          <AuthProvider>
            <ModalProvider>
              <Component {...pageProps} />
              <MyModal />
            </ModalProvider>
          </AuthProvider>
        </GlobalContextProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
