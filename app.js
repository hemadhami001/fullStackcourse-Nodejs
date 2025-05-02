const express = require('express')
const { books } = require('./database/connection')

const app = express()
require("./database/connection")
app.use(express.json())

app.get("/books",async function(req,res){
    //logic to fetch bboks from database
    const datas = await books.findAll() //select * from books
    res.json({
        message : "books fetched successfully",
        datas    //datas : datas
    })
})

app.post("/books",async function(req,res){
    //logic to add books from database
    console.log(req.body)
    // const bookName = req.body.bookName
    // const bookPrice = req.body.bookPrice

    const {bookName,bookPrice,bookAuthor,bookGenre} =req.body
   await books.create({
        bookName : bookName, 
        bookPrice : bookPrice,
        bookAuthor : bookAuthor,
        bookGenre : bookGenre
         //colunmName : value
    })
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