import express from "express";
import { getcurrentuser, login, register } from "../Controllers/Usercontroller.js";
import { loginchk, registerchk } from "../Middleware/auth.js";

const router = express.Router();
  

router.post('/register',registerchk,register);
router.post('/login',loginchk,login);
router.post('/getcurrentuser',getcurrentuser)


export default router;