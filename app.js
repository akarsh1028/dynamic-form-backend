const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const DynamicFrom = require('./model/formModel')
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('Hello Dynamic Form')
})

app.get('/form', async(req, res) => {
    try {
        const products = await DynamicFrom.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/form/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await DynamicFrom.findById(id);
        res.status(200).json({status: true, body: product});
    } catch (error) {
        res.status(200).json({status: false, message: error.message})
    }
})


app.post('/newform', async(req, res) => {
    try {
        const newform = await DynamicFrom.create(req.body)
        res.status(200).json(newform);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

var url = "mongodb+srv://akarshsharma001:akarsh1234@cluster0.qirzxgy.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 8000
mongoose.set("strictQuery", false)
mongoose.
connect(url)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(port, ()=> {
        console.log(`Node API app is running on port 8000`)
    });
}).catch((error) => {
    console.log(error)
})

var minutes = 14, the_interval = minutes * 60 * 1000;
setInterval(async function() {
  console.log("I am doing my 14 minutes check");
  const products = await DynamicFrom.find({});
}, the_interval);