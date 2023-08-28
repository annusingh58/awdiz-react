import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function Home(){
 const {state,dispatch}=useContext(AuthContext);
 const Logout=()=>{
    dispatch({
        type:"LOGOUT"
    })
 }
    return(
        <div>
           <h1>Home</h1>
           <h3 >Login User: <span className="uppercase text-red-800 text-3xl font-bold">{state?.user?.name}</span></h3>
           <button onClick={Logout}>Logout</button>
        </div>
    )

}
export default Home;