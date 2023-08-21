import { useState } from "react";


function Counter(props){
    const{myName,myAge,myStudents,name, setName}=props;
    console.log(myName, "myname", myAge, "myAge", myStudents ,"myStudents")
    const [counter, setCounter] = useState(100)
    const [counter2,setCounter2]= useState(0)
    const[flag,setFlag] = useState(false);
    console.log(counter,"-counter")

    const changeFlag=()=>{
        if(flag==false){
            setFlag(true);
        }else{
            setFlag(false)
        }
    }

   return(
    <div>
        <h1>Name -{name}</h1>
        <button onClick={()=> setName("xyz")}>change name to xyz</button>
        {flag ? <h1>flag is true</h1>:<h1>flag is false</h1>}
         <h1>Counter - {counter}</h1>
        <button onClick={()=> setCounter((prevstate)=> prevstate + 1)}>+</button>
        <h2>Counter 2 -{counter2}</h2>
        <button onClick={()=>setCounter2((prevstate)=> prevstate + 1)}> +For 2 Counter</button>
        <button onClick={changeFlag}>change Flag</button>

    </div>
   
    
       
   ) 
    }


export default Counter;