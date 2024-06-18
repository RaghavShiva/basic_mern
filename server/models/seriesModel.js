const mongoose = require("mongoose")

const seriesSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String
    },
    rating:{
        type:Number
    },
    yearofRelease:{
        type:Number
    }
},{timestamps: true})

const Series = mongoose.model("series",seriesSchema)
module.exports = Series