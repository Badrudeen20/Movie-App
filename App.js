const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const url = process.env.DB_CON
const mongoose = require('mongoose')

const Login = require('./routes/AdminLogin')
const Home = require('./routes/Home')
const Upload = require('./routes/Upload')
const Update = require('./routes/Update')
const Delete = require('./routes/Delete')
const Logout = require('./routes/Logout')
const Notify = require('./routes/Notify')

const Category = require('./routes/Category')
const Download = require('./routes/Download')
const Search = require('./routes/Search')
const Recent = require('./routes/Recent')

const About = require('./routes/About')
const Contact = require('./routes/Contact')
const Comment = require('./routes/Comment')

const {ensureAuthenticated} = require('./middleware/Admin')
const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')
require('./config/passport')(passport)




mongoose.connect(url,{
     useCreateIndex:true,
     useNewUrlParser:true,
     useFindAndModify:true,
     useUnifiedTopology:true
     },
     function(err){
       if(err) throw err
       console.log('connected!')
     })



app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({
    extended:false
}))

//session
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{expires:1000 * 60 * 60 * 60} 
}))

//flash
app.use(flash())


//passport
app.use(passport.initialize())
app.use(passport.session())

//globel middleware
app.use((req,res,next)=>{
    res.locals.user = req.user
    next()
})




app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

//admin
app.use('/login',Login)
app.use('/logout',ensureAuthenticated,Logout)
app.use('/upload',ensureAuthenticated,Upload)
app.use('/update',ensureAuthenticated,Update)
app.use('/delete',ensureAuthenticated,Delete)
app.use('/notify',ensureAuthenticated,Notify)
//links
app.use('/',Home)
app.use('/category',Category)
app.use('/download',Download)


//search
app.use('/search',Search)
app.use('/recent',Recent)
app.use('/comment',Comment)
//about
app.use('/about',About)
app.use('/contact',Contact)







app.listen(port,(req,res)=>{
     console.log(`localhost:${port}`)
})

