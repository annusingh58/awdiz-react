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

function App() {
  return (
    <div className ="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
     
      <Route exact path='/counter' element={<Counter/>}/>
      <Route exact path ='/effect-1' element={<UseEffectOne/>}/>
      <Route exact path ='/effect-2' element={<UseEffectTwo/>}/>
      <Route exact path = '/effect-3' element={<UseEffectThree/>}/>
      <Route exact path = '/effect-4' element ={<UseEffectFour/>}/>
      <Route exact path ='/SingleProduct/:id' element={<SingleProduct/>}/>
      <Route exact path ='/MultipleProduct' element={<MultipleProduct/>}/>

      </Routes>
      

    </div>
   
    
  );
}

export default App;
