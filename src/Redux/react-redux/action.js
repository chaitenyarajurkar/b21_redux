// function calls

import { CAMERADATA, MOBILEDATA } from "./constant"


const getMobileData =(parameterData)=>(dispatch)=>{
      debugger
    // data ko dispatch 
    // to reducer

    console.log("getMobileData called")

    dispatch({
        type:MOBILEDATA,
        payload: {data:parameterData}
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