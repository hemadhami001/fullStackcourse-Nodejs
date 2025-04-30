const db = require("../connection")

const bookModel = (sequelize,DataTypes)=>{
     const Book =  sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        bookAuthor : {
            type : DataTypes.STRING
        }
     })
     return Book
     console.log("bookModel is called")
    }

    //hamile bookmodel ko kaam sakepaxi yaslai bahira falne ho
    module.exports = bookModel