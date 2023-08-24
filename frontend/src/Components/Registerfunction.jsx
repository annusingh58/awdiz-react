import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registerfunction = () => {
    const [userData, setUserData] = useState({ name: '', email: "", password: "", confirmpassword: "" })

    const router = useNavigate();
    console.log(userData, "userData");

    const handleChange = (event) => {

        setUserData({ ...userData, [event.target.name]: event.target.value })

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(userData.name && userData.email && userData.password && userData.confirmpassword){
            try {
                const response=await axios.post("http://localhost:8000/api/v1/register",{
                    name:userData.name,
                    email:userData.email,
                    password:userData.password,
                    confirmpassword:userData.confirmpassword
                });
                console.log(response,"response")
                const data=response.data;
                if(data.success){
                    alert(data.message);
                }
            } catch (error) {
                console.log(error)
                if(!error.response.data.success){
                    alert(error.response.data.message);
                }
            }
        }else{
            alert("All fields are required.");
        }
    
       
    }

        return (
            <>
                <div>
                    <h1>Register Page</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Name</label><br />
                        <input type='text' name='name' onChange={handleChange} /><br />
                        <label>Email</label><br />
                        <input type='text' name='email' onChange={handleChange} /><br />
                        <label>Password</label><br />
                        <input type='password' name='password' onChange={handleChange} /><br />
                        <label>Confirm Password</label><br />
                        <input type='password' name='confirmpassword' onChange={handleChange} /><br />
                        <input type="submit" value="Registerfunction" /><br />

                    </form>
                    <button onClick={() => router('/loginfunction')}>Click here to go Login</button>

                </div>
            </>
        )
    

}


export default Registerfunction;
