require('dotenv').config()

const { render } = require('ejs')
const express = require('express') //commonjs
const path = require('path')

const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express() //app express
const port = process.env.PORT || 3001 //port
const hostname = process.env.HOST_NAME

// config req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))


configViewEngine(app)

app.use('/', webRoutes)
  

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})