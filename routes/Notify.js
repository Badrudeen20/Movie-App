const express = require('express')
const route = express.Router()
const CommentSchema = require('../model/CommentSchema')

route.post('/', async(req,res)=>{
    const result = await  CommentSchema.findByIdAndDelete(req.body.id)
    try{
        return res.redirect('/notify')
    }catch(err){
        console.log(err)
    }
})


route.get('/', async (req,res)=>{
    CommentSchema.updateMany({notify:false},{$set:{notify:true}},{multi:true}, 
        async   (err, result) => {
        if(result){
         const user = await CommentSchema.find({})
         try{
              return res.render('notify',{user:user,active:"home"})
          }catch(err){
               console.log(err)
          }
        }
      })
}) 


module.exports = route