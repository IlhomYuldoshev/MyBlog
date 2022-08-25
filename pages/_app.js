import '../styles/index.scss'
import {ModalProvider} from "../src/Context/ModalContext";
import MyModal from "../src/Components/Moleculas/Modal";
import QueryProvider from "../src/Query";
import {AuthProvider} from "../src/Context/AuthContext";

function MyApp({Component, pageProps}) {
  return (
    <QueryProvider>
      <AuthProvider>
        <ModalProvider>
          <Component {...pageProps} />
          <MyModal/>
        </ModalProvider>
      </AuthProvider>
    </QueryProvider>
  )
}

export default MyApp
