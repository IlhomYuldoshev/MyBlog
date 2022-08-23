import '../styles/index.scss'
import {ModalProvider} from "../src/Context/ModalContext";
import MyModal from "../src/Components/Moleculas/Modal";

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <MyModal/>
    </ModalProvider>
  )
}

export default MyApp
