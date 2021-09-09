const express = require("express");
const mongoose = require(`mongoose`);
const handle = require('express-handlebars');
const routes = require('./router');


const PORT = process.env.PORT || 4550;
const app = express();
const hbs = handle.create(
    {
        defaultLayout:'main',
        extname: 'hbs'
    }
)
app.engine('hbs', hbs.engine);
app.set('view engine','hbs');
//app.set('views', 'views');


/* Подключение к базе данных
async function start(){
    try {
        await mongoose.connect('mongodb+srv://kalinov:<PASSWORD**r4>@cluster0.ulisa.mongodb.net/todos',{
            useNewUrlParser:true,
            useFindAndModify:false
        })
    } catch (error) {
        console.log(error);
    }
}
*/
// инициализация http сервера
app.listen(
    PORT, ()=>{
        console.log("Hello");
    });

 //Рендер странички  
app.use(routes);
// При вводе /test чтение get параметров и вывод их на страничку
app.get("/test",(req,res)=>{
    let a=req.query.test
    //res.send("<H1>hello <h1>" + a);
    res.render("index",{
        title: "Get parameters "+a.toString()});
});

///Вывод Html
 /*app.use(function (request, res) {
    res.send(`<!DOCTYPE html>
        <html>
        <head>
            <title>Главная</title>
            <meta charset="utf-8" />
        </head>
        <body>
            <h1>Главная страница</h1>
            <h3>Привет, Express</h3>
        </body>
        <html>`);
});
*/