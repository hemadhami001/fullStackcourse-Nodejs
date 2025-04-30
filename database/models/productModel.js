const { DataTypes } = require("sequelize");

const productModel = (sequelize,DataTypes)=>{
    const Product = sequelize.define("product",{
        productName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        productPrice : {
            type : DataTypes.FLOAT
        },
        productImage : {
            type : DataTypes.STRING
        }
    })
    return Product 
}

module.exports = productModel