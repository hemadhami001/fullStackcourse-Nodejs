
//we write db connection here
const {Sequelize,DataTypes} = require("sequelize")

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

module.exports = db