// Data
/* const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "",
        whatsapp: "666-666-666",
        bio: 'Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.',
        subject: 'Química',
        cost: '20',
        weekday: '[0]',
        time_from: '[720]',
        time_to: '[1220]'
    },
] */


// Server
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLanding, pageStudy, pageGiveClass, saveClasses} = require('./pages')

//configure nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Server init and config
server
// rRecive data on req.body
.use(express.urlencoded({ extended: true}))
//Configure statics files
    .use(express.static('public'))
    //Application routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClass)
    .post("/save-classes", saveClasses)
    // Server Start
    .listen(5500)