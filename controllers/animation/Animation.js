
const Movie = require('../../model/BollyhubSchema')

module.exports = {
    animation:async function(req,res){
        var startindex = 0
        var indexn = 1
          if(req.query.page){
         startindex = (req.query.page - 1) * 15 
         indexn = parseInt(req.query.page)
          }else{
           startindex = (1 - 1) * 15  
          }
    
        const list = await Movie.find({category:"Animation"}).limit(15).skip(startindex).exec()
        const limit = await Movie.find({category:"Animation"}).countDocuments()  
        const rec = await Movie.find({}).sort({_id:-1}).limit(5).exec()
         try{
       
              return res.render('category',{data:list,limit:limit,recent:rec,active:"animation",index:indexn})
         }catch(err){
             console.log("fail")
        }
    }
}
