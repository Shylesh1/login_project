import { CLICKED } from "./types";
import {UNCLICKED} from "./types"
;
export const session_click = ()=> {
    return {
        type:CLICKED
    }
}

export const session_unclick = () => {
    return {
        type:UNCLICKED
    }
}

//export default session_click;
