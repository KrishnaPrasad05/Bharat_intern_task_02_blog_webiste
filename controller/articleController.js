const Article = require('../model/Article')

exports.addArticle = async(req,res)=>{
    try{
        const {title,content,description}=req.body;

        const newArticle = new Article({
            title,
            content,
            description
        })
        const saveArticle = await newArticle.save()
        return res.status(201).json(saveArticle)
    }
    catch(err){
        console.log(err)
    }
}

exports.getArticles = async(req,res)=>{
    try{
        const articles = await Article.find()
        return res.status(200).json(articles)
    }
    catch(err){
        console.log(err)
    }
}

exports.getArticle = async(req,res)=>{
    try{
        const article = await Article.findById(req.params.id)
        return res.status(200).json(article)
    }
    catch(err){
        console.log(err)
    }
}

exports.deleteArticle = async(req,res)=>{
    try{
        const article = await Article.findByIdAndDelete(req.params.id)
        return res.status(204).end()
    }
    catch(err){
        console.log(err)
    }
}

exports.updateArticle = async(req,res)=>{
    try{
        const article = await Article.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        return res.status(200).json(article)
    }
    catch(err){
        console.log(err)
    }
}