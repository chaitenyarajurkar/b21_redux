// varibales maintain

import { CAMERADATA, MOBILEDATA } from "./constant";


const initialState={

    mobileData:[],
    cameraData:[]
}



// action ={

//     type:"",
//     payload:"data"
// }

export default function applicationReducer(state=initialState,action){
       debugger
    switch(action.type){

        case MOBILEDATA:
            return {
                ...state,
                mobileData:action.payload
            }
        
        case CAMERADATA:
            return {
                ...state,
                cameraData:action.payload
            }
        default:
            return{
                ...state
            }

    }


}


