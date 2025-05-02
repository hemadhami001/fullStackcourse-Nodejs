const { where } = require("sequelize")
const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res){
    //logic to fetch bboks from database
    const datas = await books.findAll() //select * from books
    res.json({
        message : "books fetched successfully",
        datas    //datas : datas
    })
}

exports.addBook = async function(req,res){
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
}

exports.deleteBook = function(req,res){
    res.json({
        message : "book deleted successfully"
    })
}

exports.editBook = function(req,res){
    res.json({
        message : "book updated successfully"
    })
}

exports.singleFetchBook = async function(req,res){

    const id = req.params.id
    const datas = await books.findByPk(id)
    books.findAll({
        where : {
            id : id
        }
    })
    res.json({
        message : "Single book fetched successfully",
        datas
    })
}

//module.exports = {fetchBooks,addBook,deleteBook,editBook} // export yesari pani garna milxa