const express = require('express')
// const { fetchBooks, addBook, deleteBook, editBook } = require('./controllers/bookController')
const bookRoute = require("./routes/bookRoute")


const app = express()
require("./database/connection")
app.use(express.json())

// app.get("/books",fetchBooks)
// app.post("/books",addBook)
// app.delete("/books/:id",deleteBook)
// app.patch("/books/:id",editBook)

app.use("/api/books/",bookRoute)

postgresql://postgres.wsoyqiototjjuqnbuxqu:fullStack@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

app.listen(5000,function(){
    console.log("Server/Backend/Nodejs project has started at port 5000")
})