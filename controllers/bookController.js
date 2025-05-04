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

exports.deleteBook =async function(req,res){
    // first hami kun book delete garne tesko id line
    const id = req.params.id
    // id paye paxi teslai delete garne
    await books.destroy({
        where : {
            id : id    //key ra value same name ko xa vane simply 'id' matrai lekhda hunxa
        }
    }) //delete from given id
  
    res.json({
        message : "book deleted successfully"
    })
}

exports.editBook = function(req,res){
    // kun book update garnne tesko id line
    const id =  req.params.id

    //k k edit garne
    const {bookName,bookPrice,bookAuthor,bookGenre} =req.body

    books.update({bookName : bookName,bookPrice : bookPrice,bookAuthor : bookAuthor,bookGenre : bookGenre},{
        where : {
            id : id
        }
    })

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