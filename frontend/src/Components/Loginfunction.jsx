import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Loginfunction=()=>{
    const[userData,setUserData]=useState({email:"",password:""})

    const router=useNavigate();
    console.log(userData,"userData");

    const handleChange=(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(userData.email && userData.password){
            try {
                const response=await axios.post("http://localhost:8000/api/v1/login",{
                    email:userData.email,
                    password:userData.password
                });
                console.log(response,"response")
                const data=response.data;
                if(data.success){
                    alert(data.message);
                }
                
            } catch (error) {
                console.log(error)
                if(!error.response.data.success){
                    alert(error.response.data.message)
                }
                
            }

        }
        else{
           alert("all field are required") ;
        }
    }

return(
    <>
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
                        
          <label>Email</label><br />
            <input type='text' name='email' onChange={handleChange} /><br />
            <label>Password</label><br />
            <input type='password' name='password' onChange={handleChange} /><br />
            <input type="submit" value="Loginfunction" /><br />

         </form>
    </div>
    </>
)

}
export default Loginfunction;
