const express =require('express')
const mongoose =require('mongoose');
const Product = require ('./models/product.model.js')
const productRoute =require('./routes/product.route.js')
const app =express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});  

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API")
});




mongoose.connect("mongodb+srv://richardoyom:2QgpJwKjCzLhWZDc@backenddb.hypubsc.mongodb.net/Node?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>{ 
    console.log("connected to database");
})
.catch(()=>{
    console.log("connection failed");

});

