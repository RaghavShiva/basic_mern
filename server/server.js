const express = require("express")
const cors = require("cors")
const app = express()
const connectDB = require("./utils/db")
const Series = require('./models/seriesModel')

app.use(cors())

connectDB() 
app.use(express.json())
app.get('/api/youtube',(req,res)=>{
    res.json({Like: "Like the video", Subscribe: "Subscribe to the channel"})
})

// create ops
app.post('/api/series',async(req,res)=>{
    try {
        const series = await Series.create(req.body)
        res.status(200).json({
            success:true,
            series
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})

// read ops

// getting all data entries
app.get('/api/series',async(req,res)=>{
    try {
       const series=await Series.find()
        res.status(200).json({
            success:true,
            series
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})

// getting by id 
app.get('/api/series/:id',async(req,res)=>{
    try {
       const series=await Series.findById(req.params.id)
       if(!series){
        return res.status(404).json({message:`Series with the ID: ${req.params.id} does not exist`})
       } // printing the suitable error when id doesn't exist
        
       res.status(200).json({
            success:true,
            series
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})


// update ops
// put-updating complete data with something new
// patch-updating some specific data
app.patch('/api/series/:id',async(req,res)=>{
    try {
       const series=await Series.findByIdAndUpdate(req.params.id,req.body)
       if(!series){
        return res.status(404).json({message:`Series with the ID: ${req.params.id} does not exist`})
       } // printing the suitable error when id doesn't exist
       
       const updatedSeries = await Series.findById(req.params.id)

       res.status(200).json({
            success:true,
            updatedSeries
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})

// delete ops

app.delete('/api/series/:id',async(req,res)=>{
    try {
       const series=await Series.findByIdAndDelete(req.params.id)
      
       if(!series){
        return res.status(404).json({message:`Series with the ID: ${req.params.id} does not exist`})
       } // printing the suitable error when id doesn't exist
        
       res.status(200).json({
            success:true
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})

const port=process.env.Port
app.listen(port,()=>{
    console.log(`server started running`)
})
