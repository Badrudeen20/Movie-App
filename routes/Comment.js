const express = require('express')
const route = express.Router()
const CommentSchema = require('../model/CommentSchema')

route.post('/', async (req,res)=>{  
      
     const comment = await new CommentSchema(req.body)

     try{
        comment.save((err,comment)=>{
              if(err) throw err
              
              CommentSchema.find({'_id':comment._id})
              .populate('Movie')
              .exec((err,result)=>{
                   if(err) throw err
                
                   return res.redirect(`/download/${req.body.postId}`)
              })
        })
     }catch(err){
          console.log(err)
     } 
})

module.exports = route