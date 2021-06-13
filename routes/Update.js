const express = require('express')
const route = express.Router()
//const UpdateMovie = require('../model/MovieSchema')
const UpdateMovie = require('../model/BollyhubSchema')

route.get('/:id', async (req,res)=>{
   
      //const list = await UpdateMovie.find({_id:req.params.id})  
      const list = await UpdateMovie.find({url:req.params.id})  
       try{
       
         return res.render('update',{data:list[0]})
       }catch(err){
            console.log("fail")
       }
}) 



route.post('/',function(req,res){
  const {id,name,image,size,duration,category,rating,genres,director,cast,
    language,quality,story,screenshot,link4,link4mb,link7mb,link7,watchonline} = req.body
   UpdateMovie.findByIdAndUpdate(id,{
       name:name,
        url:req.body.url.replace(/\s+/g, '-').toLowerCase(),
      image:image,
      pixel:size,
   duration:duration,
   category:category,
     rating:rating,
     genres:genres,
   director:director,
       cast:cast,
   language:language,
    quality:quality,
      story:story, 
 screenshot:screenshot,
watchonline:watchonline,
      link4:link4,
    link4mb:link4mb,
      link7:link7,
    link7mb:link7mb,
    /*  link4:{
        link:req.body.link4,
        mb:req.body.size4,
   },
      link7:{
        link:req.body.link7,
        mb:req.body.size7
      }, */
   },function(err,result){
        if(err) throw err
       return res.redirect('/')
   })
})

module.exports = route

module.exports = route