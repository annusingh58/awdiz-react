import { useNavigate } from "react-router-dom";
import "../CSS/Register.css";
import axios from "axios";

function Register(){
    const router =useNavigate();
    return(
        <div id="screen">
            <h1>Register page</h1>
            <button onClick={()=>router('/login')}>Click here to go Login </button>
            <button onClick={()=>router('/')}>Click here to go Home</button>
        </div>
    )
}
export default Register;
