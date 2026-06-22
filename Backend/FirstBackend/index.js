import dotenv from "dotenv";
dotenv.config();

import express from "express";
import AuthRouter from "./src/routers/auth.route.js"
import PublicRouter from "./src/routers/public.route.js"

const app = express();

app.use("/auth",AuthRouter);
app.use("/public",PublicRouter);


//default API
app.get("/", (req, res) => {
  console.log("Defult Get API Hit");
  res.json({ message: "Welcome to my first backend Project" });
});

// app.post("/login", (req,res)=>{
//   res.json({message:"Login Sucessfull"});
// });
// 
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Started on port:", port);
});
