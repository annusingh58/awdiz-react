import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Counter from './Components/Counter';
import UseEffectOne from './Components/UseEffectOne';
import UseEffectTwo from './Components/UseEffectTwo';
import UseEffectThree from './Components/useEffectThree';
import UseEffectFour from './Components/UseEffectFour';
import SingleProduct from './Components/SingleProduct';
import MultipleProduct from './Components/MultipleProduct';
import Props from './Components/Props';
import StateEffect from './Components/StateEffect';
import Mapping from './Components/Mapping';
import { useState } from 'react';
import DynamicStyle from './Components/DynamicStyle';
import Registerfunction from './Components/Registerfunction';
import Loginfunction from './Components/Loginfunction';
import Memo from './Components/Memo';
import Callback from './Components/Callback';
import Todos from './Components/Todos';


function App() {
const [name,setName]=useState("Anu");
  return (
    <div className ="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
     
      <Route exact path='/counter' element={<Counter name={name} setName ={setName} />}/>
      <Route exact path ='/effect-1' element={<UseEffectOne/>}/>
      <Route exact path ='/effect-2' element={<UseEffectTwo/>}/>
      <Route exact path = '/effect-3' element={<UseEffectThree/>}/>
      <Route exact path = '/effect-4' element ={<UseEffectFour/>}/>
      <Route exact path ='/SingleProduct/:id' element={<SingleProduct/>}/>
      <Route exact path ='/MultipleProduct' element={<MultipleProduct/>}/>
      <Route exact path ='/props' element={<Props/>}/>
      <Route exact path ='/stateeffect' element={<StateEffect/>}/>
      <Route exact path ='/mapping' element={<Mapping array={[{Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u-buBVbZ4d0fDN9Mg7NqaguBYHypqlcibw&usqp=CAU",Name:"sky",Price:"64224"},{Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u-buBVbZ4d0fDN9Mg7NqaguBYHypqlcibw&usqp=CAU",Name:"sky",Price:"64224"},{Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u-buBVbZ4d0fDN9Mg7NqaguBYHypqlcibw&usqp=CAU",Name:"sky",Price:"64224"},{Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u-buBVbZ4d0fDN9Mg7NqaguBYHypqlcibw&usqp=CAU",Name:"sky",Price:"64224"},{Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u-buBVbZ4d0fDN9Mg7NqaguBYHypqlcibw&usqp=CAU",Name:"sky",Price:"64224"}]} />}/>
      <Route exact path='/dynamicstyle' element={<DynamicStyle/>}/>
      <Route exact path='/registration' element={<Registerfunction />}/>
      <Route exact path='/loginfunction' element={<Loginfunction/>}/>
      <Route exact path='/memo' element={<Memo/>}/>
      <Route exact path='/callback' element={<Callback/>}/>
      <Route exact path='/todos' element={<Todos/>}/>
      </Routes>
      

    </div>
   
    
  );
}

export default App;
