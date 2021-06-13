const mongoose = require('mongoose')
const AdminSchema = new mongoose.Schema({
 	    	email:{type:String,required:true,unique:true},
         password:{type:String,require:true}
},{timestamps:true})




module.exports = mongoose.model("admin",AdminSchema)

