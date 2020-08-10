const Database = require('./db.js')
const createProffy = require('./createProffy')
Database.then((db) => {
    // insert data
    proffyValue = {
        name: "Diego Fernandes",
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        avatar: "",
        whatsapp: "666-666-666",
        bio: 'Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.',
        
    }

    classValue = {
        subject: 'Química',
        cost: '20',
        //Proffy id came by database
    }

    classScheduleValue = [
        {
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    }
    //Classid came by database
]

createProffy(db, {proffyValue, classValue, classScheduleValue,})
    //consult data



})