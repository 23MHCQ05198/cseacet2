const express = require("express");
const app = express();
app.get("/homepage",(req,res)=>{
    res.send("Welcome to awsacet2");
});
app.listen(3000,()=>{
    console.log("Server running succesfully");
});