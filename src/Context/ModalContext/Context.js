import {createContext} from "use-context-selector";

const initialState = {
  value: {
    isOpen: true
  },
  actions: {}
}

const ModalContext = createContext(initialState);

export default ModalContext;
