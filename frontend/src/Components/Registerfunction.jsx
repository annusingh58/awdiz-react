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
                <div className="h-screen w-screen  flex justify-center items-center">
                    
                    <form className='w-[400px] h-[550px] bg-amber-600 rounded-xl p-5' onSubmit={handleSubmit}>
                    <h1 className='font-bold text-4xl mb-5 text-black-800'>Register Page</h1>
                        <label>Name</label><br />
                        <input className='w-full h-[40px] rounded-xl mb-4 mt-2' type='text' name='name' onChange={handleChange} /><br />
                        <label>Email</label><br />
                        <input className='w-full h-[40px] rounded-xl mb-4 mt-2' type='text' name='email' onChange={handleChange} /><br />
                        <label>Password</label><br />
                        <input className='w-full h-[40px] rounded-xl mb-4 mt-2' type='password' name='password' onChange={handleChange} /><br />
                        <label>Confirm Password</label><br />
                        <input className='w-full h-[40px] rounded-xl mb-8 mt-2' type='password' name='confirmpassword' onChange={handleChange} /><br />
                        <input className='w-[180px] rounded-xl h-[40px] border-black-800 border bg-black-700 text-white text-xl hover:bg-white hover:text-blue-700' type="submit" value="Registerfunction" /><br />
                        <button className='w-[full] h-[40px] bg-orange-200 mt-5 rounded-xl ' onClick={() => router('/loginfunction')}>Click here to go Login</button>

                    </form>
                    {/* <button className='w-full' onClick={() => router('/loginfunction')}>Click here to go Login</button> */}

                </div>
            </>
        )
    

}


export default Registerfunction;
