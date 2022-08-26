import '../styles/index.scss'
import {ModalProvider} from "../src/Context/ModalContext";
import MyModal from "../src/Components/Moleculas/Modal";
import QueryProvider from "../src/Query";
import {AuthProvider} from "../src/Context/AuthContext";
import {GlobalContextProvider} from "../src/Context/GlobalContext";

function MyApp({Component, pageProps}) {
  return (
    <QueryProvider>
      <GlobalContextProvider>
        <AuthProvider>
          <ModalProvider>
            <Component {...pageProps} />
            <MyModal/>
          </ModalProvider>
        </AuthProvider>
      </GlobalContextProvider>
    </QueryProvider>
  )
}

export default MyApp
