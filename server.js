const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome my Craigen's backend application");
});
app.get("/craigen", (req,res)=>{
    res.send("Hello Craigen");
});

app.listen(3000,()=>{
    console.log("Listening");
});