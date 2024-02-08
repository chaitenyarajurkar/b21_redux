
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getMobileData } from './Redux/react-redux/action';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import Dashoard from './Pages/Dashoard';
import axios from 'axios';
import { getAPiData } from './Common/common';
function App() {
    debugger
  const reducerData = useSelector(state=>state);
  
  const dispatch = useDispatch();
  
  //accessing of initial State   useSelector
  
  useEffect(()=>{
    //calling action funtcion vala logic rahega    useDispatch
    
    getData();
   
  },[])

  const getData =()=>{
    getAPiData().then((data)=>{
      console.log(data)
      dispatch(getMobileData(data))
 })
  }

  console.log("reducerData",reducerData) ;
  return (
    <div>
      <BrowserRouter>
       <Navbar></Navbar>
       <Routes>
       <Route path='/' element={<Dashoard></Dashoard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/features' element={<Features></Features>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        
        {/* edit product route */}
       </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
