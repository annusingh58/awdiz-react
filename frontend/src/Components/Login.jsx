import { useNavigate } from "react-router-dom";

function Login(){
    const router = useNavigate();
    return(
        <div>
           <h1>Login</h1>
           <button onClick={()=> router('/register')}>click here to go Register</button>
            <button onClick={()=>router('/')}>click here to go Home</button>
        </div>
    )
}
export default Login;