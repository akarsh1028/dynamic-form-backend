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

// app.get('/products', async(req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

app.get('/form/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await DynamicFrom.findById(id);
        res.status(200).json({status: true, body: product});
    } catch (error) {
        res.status(200).json({status: false, message: error.message})
    }
})


app.post('/form', async(req, res) => {
    try {
        const newform = await DynamicFrom.create(req.body)
        res.status(200).json(newform);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

var url = "mongodb+srv://akarshsharma001:akarsh1234@cluster0.qirzxgy.mongodb.net/?retryWrites=true&w=majority"

mongoose.set("strictQuery", false)
mongoose.
connect(url)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(8000, ()=> {
        console.log(`Node API app is running on port 8000`)
    });
}).catch((error) => {
    console.log(error)
})