const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");


const userModel = (sequelize,DataTypes)=>{
    const User = sequelize.define("user",{
        username : {
            type : DataTypes.STRING,
        },
        password : {
            type : DataTypes.STRING
        }
    })
    return User
}

//bookModel ko kaam vaisakye paxi hamile yalai bahira falne ho 
module.exports = userModel
