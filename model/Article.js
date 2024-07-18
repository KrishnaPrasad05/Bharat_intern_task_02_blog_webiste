const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title:{type:String},
    content:{type:String},
    description:{type:String},
    createdAt:{type:Date, default:Date.now()},
})

const Article = mongoose.model('Article',articleSchema)

module.exports= Article;