const mongoose = require('mongoose')

const MovieSchema  = new mongoose.Schema({
       name:{type:String,require:true},
       url:{type:String,require:true},
      image:{type:String,require:true},
   duration:{type:String},
   category:{type:String,required:true},
     rating:{type:String},
     genres:{type:String},
   director:{type:String},
       cast:{type:String},
   language:{type:String,required:true},
    quality:{type:String},
      story:{type:String},
 screenshot:{type:String},
watchonline:{type:String},
      link4:{type:String},
    link4mb:{type:String},
      link7:{type:String},
    link7mb:{type:String},
      /* link7:[{
        link:{type:String},
        mb:{type:String}
       }], */
},{timestamps:true})

module.exports = mongoose.model("movie",MovieSchema)