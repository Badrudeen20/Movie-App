const express = require('express')
const route = express.Router()
const UploadSchema = require('../model/BollyhubSchema')

route.get('/',(req,res)=>{  
     //  res.json({Auth:true})
     res.render('upload')
  })

route.post('/', async (req,res)=>{  

     const upload = await new UploadSchema({
           name:req.body.name,
            url:req.body.url.replace(/\s+/g, '-').toLowerCase(),
          image:req.body.image,
       duration:req.body.duration,
       category:req.body.category,
         rating:req.body.rating,
         genres:req.body.genres,
       director:req.body.director,
           cast:req.body.cast,
       language:req.body.language,
        quality:req.body.quality,
          story:req.body.story,
     screenshot:req.body.screenshot,
    watchonline:req.body.watchonline,
          link4:req.body.link4,
        link4mb:req.body.link4mb,
          link7:req.body.link7,
        link7mb:req.body.link7mb,
        /*  link7:{
               link:req.body.link7,
               mb:req.body.size7
             },
          link4:{
               link:req.body.link4,
               mb:req.body.size4,
          } */

     })

     try{
          upload.save(function(err,data){
             return res.redirect('/')
          })
     }catch(err){
          console.log(err)
     } 
})






module.exports = route