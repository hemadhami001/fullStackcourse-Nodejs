
//we write db connection here
const {Sequelize,DataTypes} = require("sequelize")

//const bookModel = require("./models/bookModel")

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.wsoyqiototjjuqnbuxqu:fullStack@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("authenticated vayo, connected")
})
.catch((err)=>{
    console.log("error aayo" + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//tables(models) haru banaye paxi import garne Hema don't forget
db.books = require("./models/bookModel")(sequelize,DataTypes)
db.users = require("./models/userModel")(sequelize,DataTypes)
db.product = require("./models/productModel")(sequelize,DataTypes)
//for migration
sequelize.sync({alter : false}).then(()=>{
    console.log("migration done")
})

// yedi hamile alter: true rakhau vane all column ko data haru change hunxan 
module.exports = db