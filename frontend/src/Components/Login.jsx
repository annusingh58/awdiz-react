import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";



function Login(){
    const router = useNavigate();

    
    return(
        <div id="screen">
           <h1>Login</h1>
           <button onClick={()=> router('/register')}>click here to go Register</button>
            <button onClick={()=>router('/')}>click here to go Home</button>
        </div>
    )
}
export default Login;