import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./Context/AuthContext";
import { json } from "react-router-dom";


const Loginfunction=()=>{
    const[userData,setUserData]=useState({email:"",password:""});
    const {state,dispatch}=useContext(AuthContext);
    console.log(state);
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
                    dispatch({
                        type:"LOGIN",
                        payload:data?.response
                    });
                    localStorage.setItem("JWTToken",JSON.stringify(data.token));
                    alert(data.message);
                    router('/');
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
    <div className="h-screen w-screen  flex justify-center items-center ">
        <form className="w-[400px] h-[450px] bg-orange-500 mt-10 p-7 rounded-xl" onSubmit={handleSubmit}>
             <h1 className="font-bold text-5xl mb-5 text-black-600">Login Page</h1>
           
          <label>Email</label><br />
            <input className="w-full h-[40px] rounded-xl mb-4 mt-2" type='text' name='email' onChange={handleChange} /><br />
            <label>Password</label><br />
            <input className="w-full h-[40px] rounded-xl mb-4 mt-2" type='password' name='password' onChange={handleChange} /><br />
            <input className="w-[120px] h-[40px] rounded-xl mb-4 mt-2 border-black border bg-white hover:border-black-500 hover:bg-slate-500 "type="submit" value="Loginfunction" /><br />

         </form>
    </div>
    </>
)

}
export default Loginfunction;
