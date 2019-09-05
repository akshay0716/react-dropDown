const express  = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

/************************************
 * @DESC - MIDDLEWARE INIITILIZATION
 * @PACKAGE - EXPRESS
 ***********************************/
const app = express();
app.use( cors() );

/************************************
 * @DESC    - PARSER JSON BODY
 * @PACKAGE - body-parser
 ***********************************/
app.use( bodyParser.urlencoded({ extended : false }) );
app.use( bodyParser.json() );


// RENDER YOUR REACT PROJECT FROM NODE SERVER AND RENDER INDEX.HTML

    app.use(express.static('build'));
    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html' ));
    })


/************************************
 * @DESC    - PORT INITILIZATION
 * @PACKAGE - NODEJS
 ***********************************/
const PORT = process.env.PORT || 5001;
app.listen( PORT, () =>  console.log(`Started Server on Port`,PORT) );