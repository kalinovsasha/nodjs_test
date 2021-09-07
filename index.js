const express = require("express");
const mongoose = require(`mongoose`);
const handle = require('express-handlebars');
const PORT = process.env.PORT || 4550;
const app = express();

const router = express.Router();
const hbs = handle.create(
    {
        defaultLayout:'main',
        extname: 'hbs'
    }
)
app.engine('hbs',hbs.engine);
app.set('viev engine','hbs');
app.set('views','views');

async function start(){
    try {
        await mongoose.connect('mongodb+srv://kalinov:q1w2e3r4@cluster0.ulisa.mongodb.net/todos',{
            useNewUrlParser:true,
            useFindAndModify:false
        })
    } catch (error) {
        console.log(error);
    }
}

app.listen(
    PORT, ()=>{
        console.log("Hello");
    });
    app.use(function (request, res) {
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