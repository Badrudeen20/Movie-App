const express = require('express')
const { get } = require('mongoose')
const route = express()
const Movie = require('../model/BollyhubSchema')

route.get('/',async (req,res)=>{
     
     var startindex = 0
     var indexn = 1
    
       if(req.query.page){
      startindex = (req.query.page - 1) * 15 
      indexn = parseInt(req.query.page)
       }else{
        startindex = (1 - 1) * 15  
       }
       var n = 1
       var z = indexn-n
       var FilterMovie = []
     const result = await Movie.find({})
     const rec = await Movie.find({}).sort({_id:-1}).limit(5).exec()
      try{
        
          result.map(item=>{
            if(item.name.toLowerCase().includes(req.query.find.toLowerCase())){
                 FilterMovie.push(item)
            }
       })
      
          var getLimit = FilterMovie.slice(z*15, 15*indexn); 
          
            return   res.render('search',{data:getLimit,recent:rec,active:"home",limit:FilterMovie.length,index:indexn,search:req.query.find})
      }catch(err){
          console.log(err)
      }
})

module.exports = route