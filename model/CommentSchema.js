const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const commentSchema = mongoose.Schema({
    postId:{
      //  type:Schema.Types.ObjectId,
       type:String,
        ref:'Movie'
    },
    responseTo:{
       // type:Schema.Types.ObjectId,
        type:String,
        ref:'User'
    },
    content:{
        type:String
    },
    name:{
        type:String
    },
    movieLink:{
        type:String
    },
    notify:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model('comment',commentSchema)