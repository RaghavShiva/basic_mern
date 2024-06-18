const mongoose = require("mongoose")
require('dotenv').config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.Database_url).then(console.log('mongodb connected'))
    }
    catch(error){
        console.log(error.message)
    }
}
module.exports = connectDB