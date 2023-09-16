import React, { useMemo, useState } from 'react'

const Memo = () => {
    const[counter,setCounter]=useState(0);
    const[todos,setTodos]=useState([]);
    const[todo,setTodo]=useState("");

    console.log(todos,"todos")
    const addTodo=()=>{
        alert("reder")
        setTodos([...todos,todo])
        
        setTodo("")
    }

    // const finalCounter=useMemo(()=>expensiveCalculations(counter),[counter]);

    const finalCounter=expensiveCalculations(counter);

    console.log(finalCounter,"finalCounter")

  return (
    <div>
        <h1>Counter:{counter} {finalCounter}</h1>
        <button onClick={()=>setCounter((prevstate)=>prevstate+1)}>Add Counter</button>

        <h1>Todos: </h1>
        <input value={todo} onChange={(event)=> setTodo(event.target.value)}/>
        <button onClick={addTodo}>Add todo</button>

        {todos?.length? <div> 
            {todos.map((todo,i)=>(
                <h1>{i} - {todo}</h1>
            ))}
        
        </div>:<div> No todos found</div>}
        </div>
  )
}

function expensiveCalculations(number){
    // alert("inside function...")

    for(let i=0 ;i<100000000; i++){
        number+=1
    }
    return number;
}
export default Memo