const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//bringing in our api route
const items = require('./routes/api/items');
//reuire a path to bring in  our static build html client
const path = require('path');


const app = express();

app.use(bodyParser.json());

//config database
const db = require('./config/key').mongoURI;

mongoose
.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('mongo db is connected')
})
.catch(err => {
    console.log(err)
})

//use the api route
app.use('/api/items', items);

//serve our static file if we are in production
if(process.env.NODE_ENV === 'production') {
    //load the static file
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//set the connection port
const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`server running connected on port ${port}`)
})