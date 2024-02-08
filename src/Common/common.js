
import axios from 'axios';



const getAPiData = async()=>{
    const resp = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts');
    
    return resp.data.data;
    // dispatch(getMobileData(data))
 
 }


 export {getAPiData}



//  api function  ==> action function  => reducer will store the data