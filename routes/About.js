const express = require('express')
const route = express.Router()


route.get('/', (req,res)=>{
      res.render('about',{active:"home"})
})

module.exports = route