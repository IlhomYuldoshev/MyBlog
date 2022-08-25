import {createContext} from "use-context-selector";
import {initialState} from "./Provider";

const AuthContext = createContext(initialState)

export default AuthContext;
