const express=require('express');
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).send("welcome to the express server")
})
app.get("/login",(req,res)=>{
    res.status(200).send("welcome to the express")
})
app.post("/signup",(req,res)=>{
   console.log(req)
    res.status(200).send(req.body)
})
app.post("/login",(req,res)=>{
    console.log(req)
     res.status(200).send(req.body)
 })
 app.post("/blog",(req,res)=>{
    console.log(req)
     res.status(200).send(req.body)
 })
app.listen(8090,()=>{
    console.log("Exprss port 8090")
})