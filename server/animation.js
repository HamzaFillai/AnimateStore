const express = require("express");
const app =  express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "",
    database : "animate"
});

app.post("/saving",(request,response)=>{
    console.log(request.body.pubb);
    console.log(request.body.name);
    console.log(request.body.trigger);
    console.log(request.body.speed);

})

app.listen(8080, () => {
    console.log("Yey, your server is running on port 8080");
});