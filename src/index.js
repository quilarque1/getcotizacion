const express = require('express');
const app = express();
const morgan = require('morgan');

//Settigs
app.set('port',3000);
app.set('json spaces', 2);

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));

//starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port '+ app.get('port'));
});