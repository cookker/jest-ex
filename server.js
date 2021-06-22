const express = require('express');


const PORT = 5000;

const app = express();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://username:BDyQzw5nvEDMq5e@cluster0.zgivr.mongodb.net/hello?retryWrites=true&w=majority'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => console.log('MongoDb Connected...'))
.catch( err => console.error(err));

app.use("/api/products", productRoutes);

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);
/**
 * mongodb account
 * username: username
 * password: BDyQzw5nvEDMq5e
 */