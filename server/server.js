const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const db = require ('./index');
const stuffRouter = require('./Routes/stuff-router');
const userRouter = require ('./Routes/user-Router');



const app = express();
const apiPort = 8000




app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors( {
    origin: "http://localhost:3000",
    credentials: true
  }))
 
app.use(bodyParser.json())
app.use(stuffRouter, userRouter)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.get('/', (req,res)=> {
    
res.send ('hello world');
  
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))