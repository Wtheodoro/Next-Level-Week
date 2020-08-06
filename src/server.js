// Data
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

const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

const subjects = ['Artes',  'Biologia', 'Ciências', 'Educação física', 'Física', 'Geografia', 'História', 'Matemática', 'Português', 'Química']

//Aplication functions
function getSubject(subjectNumber) {
    // The plsu signal is to ensure that subjectNumber is a number
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")  
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClass(req, res) {
    const data = req.query
    //If there is data of proffy
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        // Push new data to proffys
        proffys.push(data)
        return res.redirect("/study")
    }
    // if there is not
    return res.render("give-classes.html", { subjects, weekdays })
}

// Server
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configure nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Server init and config
server
//Configure statics files
    .use(express.static('public'))
    //Application routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClass)
    // Server Start
    .listen(5500)