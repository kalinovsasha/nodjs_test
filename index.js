const express = require("express");
const PORT = process.env.PORT || 4550;
const app = express();

app.listen(
    PORT, ()=>{
        console.log("Hello");
    }
)