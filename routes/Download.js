const express = require('express')
const route = express.Router()
const Movie = require('../model/BollyhubSchema')
const CommenSchema = require('../model/CommentSchema')

route.get('/:id', async (req,res)=>{
  
     const name = req.params.id
      const rec = await Movie.find({}).sort({_id:-1}).limit(5).exec()
    // const list = await Movie.find({_id:req.params.id})  
     const list = await Movie.find({url:req.params.id}) 
     const comments = await CommenSchema.find({'postId':req.params.id})
       try{
           
            return res.render('download',{movie:list,active:"home",recent:rec,chat:comments})
         //  res.json(list)
       }catch(err){
            console.log("fail")
       }
}) 
module.exports = route