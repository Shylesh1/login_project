import {CLICKED,UNCLICKED} from "./types";

const initialState = {
    clicked:false,
}

const sessiontorfReducer=(state=initialState,action)=> {

    switch(action.type) {

        case CLICKED:
            return {
                ...state,
                clicked:true,
            }
        case UNCLICKED: 
            return {
                ...state,
                clicked:false
            }
            default: 
            return state;
    }
}

export default sessiontorfReducer;