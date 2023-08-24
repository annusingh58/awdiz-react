import express from "express";
import { login, register } from "../Controllers/Usercontroller.js";
import { loginchk, registerchk } from "../Middleware/auth.js";

const router = express.Router();
  

router.post('/register',registerchk,register);
router.post('/login',loginchk,login)


export default router;