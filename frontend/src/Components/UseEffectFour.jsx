import { useEffect, useState } from "react";

function UseEffectFour(){

    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2] =useState(0);

    useEffect(()=>{console.log("inside effect")},[counter1,counter2])
        return(
            <div>
                 <h1>Counter 1 -{counter1}</h1>
            <button onClick={()=> setCounter1((prevState)=> prevState + 1)}>+</button>
            <h2>Counter 2 -{counter2}</h2>
            <button onClick={()=> setCounter2((prevState)=> prevState + 1)}>+</button>
            </div>
        )
    
}
export default UseEffectFour;
