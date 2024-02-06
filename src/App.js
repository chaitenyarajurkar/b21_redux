
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getMobileData } from './Redux/react-redux/action';

function App() {
    
  const reducerData = useSelector(state=>state);
  const dispatch = useDispatch();
  console.log(reducerData) ;
  //accessing of initial State   useSelector
  
  useEffect(()=>{
    //calling action funtcion vala logic rahega    useDispatch
    dispatch(getMobileData())
  },[])
  return (
    <div>
      Mobile Data
    </div>
  );
}

export default App;
