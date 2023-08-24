import USER from "../Model/User.js";


export const register=async(req,res)=>{
    try {
        const{name,email,password,confirmpassword}=req.body;
        const response=await USER.find({email}).exec();
        if(response.length)return res.status(400).json({status:400,success:false ,message:"user already registered"});

        const user=new USER({
            name,email,password,confirmpassword
        })
        await user.save();
        return res.status(200).json({status:200,success:true,message:"User registered successfuly"})
    } catch (error) {
        return res.status(500).json({status:500,success:false,message:error})
    }
}


export const login =async(req,res)=>{
    try {
        const{email,password}=req.body;
        if(!email)return res.status(400).json({status:400,success:false,message:"email is required"});
        if(!password)return res.status(400).json({status:400,success:false,message:"password is required"});
        
        const response = await USER.find({email}).exec();
        if(!response) return res.status(400).json({status: 400,success:false, message: "email not exits"});
        
        if(response[0].email==email && password)
        return res.status(200).json({status:200,success:true,message:"login sucessfully"})
       
 
    } catch (error) {
        return res.status(500).json({stastus:500,success:false,message:"error"});
    }
}