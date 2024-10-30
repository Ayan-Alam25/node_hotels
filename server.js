const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.send('Welcome to my hotel. ')
})


const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', MenuItemRoutes);


app.listen(PORT, ()=>{
    console.log('Listening on port 3000')
})