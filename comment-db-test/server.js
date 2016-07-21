'use strict'

const express         = require('express')
const logger          = require('morgan')
const app             = express()
const path            = require('path')
const bodyParser      = require('body-parser')
const commentRouter   = require('./routes/comments')
const dropdownRouter  = require('./routes/dropdown')

const PORT            = process.env.PORT || process.argv[2] || 3000

// set up logging so that we can see what's happening
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')));

// set up server
app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
})

/* Routes */

app.use('/comments', commentRouter);
app.use('/dropdown', dropdownRouter)
app.get('/', function(req,res){
  res.render('home')
})