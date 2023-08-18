import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(100)
    console.log(counter,"-counter")

   return(
    <div>
         <h1>Counter - {counter}</h1>
        <button onClick={()=> setCounter((prevstate)=> prevstate + 1)}>+</button>
        
        <button onClick={()=>setCounter((prevstate)=> prevstate - 1)}>-</button>
    </div>
   
    
       
   ) 
}

export default Counter;