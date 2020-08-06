const proffys = [
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
]

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

function pageLanding(req, res) {
    return res.render("index.html")  
}

function pageStudy(req, res) {
    return res.render("study.html", { proffys })
}

function pageGiveClass(req, res) {
    return res.render("give-classes.html")
}

//configure nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
//Configure statics files
    .use(express.static('public'))
    //Application routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClass)
    .listen(5500)