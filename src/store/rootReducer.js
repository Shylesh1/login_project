import { combineReducers } from "redux";
import sessiontorfReducer from "./sessiontorf/sessiontorfReducer";

const rootReducer = combineReducers({
    sessiontorf : sessiontorfReducer,

})


export default rootReducer;