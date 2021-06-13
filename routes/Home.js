const express = require('express')
const route = express.Router()
const CommentSchema = require('../model/CommentSchema')
const Movie = require('../model/BollyhubSchema')

route.get('/', async (req,res)=>{
     var startindex = 0
     var indexn = 1
       if(req.query.page){
      startindex = (req.query.page - 1) * 15 
      indexn = parseInt(req.query.page)
       }else{
        startindex = (1 - 1) * 15  
       }
       const rec = await Movie.find({}).sort({_id:-1}).limit(5).exec()
      const list = await Movie.find({}).sort({_id:-1}).limit(15).skip(startindex).exec()
      const limit = await Movie.find().countDocuments()
      const result = await CommentSchema.find({notify:false})
     try{
        
          
           return res.render('home',{data:list,limit:limit,index:indexn,recent:rec,active:"home",notify:result.length})
       }catch(err){
            console.log("fail")
       }
}) 
module.exports = route