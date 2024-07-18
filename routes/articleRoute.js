const express = require('express')
const { addArticle, getArticles, getArticle, deleteArticle, updateArticle } = require('../controller/articleController')
const router = express.Router()

router.post('/article',addArticle)
router.get('/article',getArticles)
router.get('/article/:id',getArticle)
router.delete('/article/:id',deleteArticle)
router.put('/article/:id',updateArticle)

module.exports=router;