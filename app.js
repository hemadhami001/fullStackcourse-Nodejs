const express = require('express')
const app = express()
require("./database/connection")


app.get("/books",function(req,res){
    res.json({
        message : "books fetched successfully"
    })
})

app.post("/books",function(req,res){
    res.json({
        message : "book added sucessfully"
    })
})

app.delete("/books/:id",function(req,res){
    res.json({
        message : "book deleted successfully"
    })
})

app.patch("/books/:id",function(req,res){
    res.json({
        message : "book updated successfully"
    })
})

postgresql://postgres.wsoyqiototjjuqnbuxqu:fullStack@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

app.listen(5000,function(){
    console.log("Server/Backend/Nodejs project has started at port 5000")
})