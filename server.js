const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const articleRoute = require('./routes/articleRoute')
//config dotenv file
dotenv.config()

//use cors,json
app.use(cors())
app.use(express.json())
app.use(express.static('view'))

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)

//html routes
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','index.html'))
})
app.get('/new',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','new.html'))
})
app.get('/view/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','view.html'))
})
app.get('/update/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','update.html'))
})

//api routes
app.use('/api',articleRoute)

//start server
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})