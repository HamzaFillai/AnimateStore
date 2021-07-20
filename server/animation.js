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
    database : "animation"
});

//save animation
app.post("/saving",(request,response)=>{
    var trig = "";
    if(request.body.trigger==1)
    {
        trig="always";
    }
    else
    {
        trig="hover";
    }
    if(request.body.publish==null)
    {
        request.body.publish="unpublished";
    }
    console.log(request.body.publish);
    db.query("INSERT INTO `animate` (`name_animation`, `trigger`, `speed`, `publish`) VALUES (?,?,?,?)",
    [request.body.name,trig,request.body.speed,request.body.publish],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
})

//delete the last animation 
app.delete("/delete",(request,response)=>{
    db.query("DELETE n1 FROM animate n1, animate n2 WHERE n1.id = n2.id+1 and n1.name_animation=n2.name_animation and n1.trigger=n2.trigger and n1.speed=n2.speed and n1.publish=n2.publish",(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            response.send(result);
        }
    })
})

app.listen(8080, () => {
    console.log("Yey, your server is running on port 8080");
});