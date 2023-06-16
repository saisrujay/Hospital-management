const exp = require('express');
const dotenv = require('dotenv').config();
const mongo = require('mongoose').set('strictQuery', false);


const app = exp();


app.get("/", (req,res) => {
    res.send("Home page");
});

mongo.connect(process.env.MONGOURI)
    .then(() => {
        console.log("Connected to mongodb");
    })
    .catch( (err)=>{
        console.log(err);
    })

app.listen(process.env.PORT, () => {
    console.log("server started at port 3000");
});