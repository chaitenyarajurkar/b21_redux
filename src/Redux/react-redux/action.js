// function calls

import { CAMERADATA, MOBILEDATA } from "./constant"


const getMobileData =(parameterData)=>(dispatch)=>{

    // data ko dispatch 
    // to reducer

    console.log("getMobileData called")

    dispatch({
        type:MOBILEDATA,
        payload:{data:["Mobile1","MObile2","Mobile3","Mobile4"] }
    })
}


const getCameraData =(parameterData)=>(dispatch)=>{

    // data ko dispatch 
    // to reducer



    dispatch({
        type:CAMERADATA,
        payload:{data:["Camera1","Camera2","Camera3","Camera4"] }
    })
}

export{
    getMobileData,getCameraData
}