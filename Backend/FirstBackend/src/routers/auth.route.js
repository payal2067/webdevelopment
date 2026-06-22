 import express from "express";
import { LoginUser, LogoutUser, RegisterUser } from "../controllers/auth.controller.js";

//  LoginUser,
//  RegisterUser,
//  LogoutUser
 const router = express.Router();

 router.post("/login",LoginUser);
 router.post("/register",RegisterUser);
 router.get("/logout",LogoutUser);

 export default router;