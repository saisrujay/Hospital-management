const exp = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('mongoose').set('strictQuery', false);
const userRoute = require('./routes/userRoute');

const app = exp();

// Parse JSON bodies
app.use(bodyParser.json());
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Enable CORS for a specific origin
app.use(cors({
    origin: 'http://localhost:3000' 
}));
  
//Route Middleware
app.use("/api/users", userRoute);

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
    console.log("server started at port 5000");
});