
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// iniciando o express
const server = express()

//utilizar body do req
.use(express.urlencoded({extended: true}))

// utilizando os aqrquivos estaticos
server .use(express.static('public'))


// configurar template engine

.set('views', path.join(__dirname, "views"))
.set ('view engine', 'hbs')

//routes of aplication
.get('/', pages.home)
.get('/create-orphanage', pages.createOrphanage)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.post('/save-orphanage', pages.saveOrphanage)

server.listen(5500)
