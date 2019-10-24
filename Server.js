const express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 3000;
var cors = require('cors')
app.use(cors())

const mysql = require('mysql');

const mc = mysql.createConnection({
    host        :   'localhost',
    user        :   'root',
    password    :   'aliasapps',
    database    :   'TOTPAL'
});

mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


/*mc.query('SELECT * FROM rooms', (err,rows) => {
    if (err) throw err;

    console.log('Data received');
    console.log(rows);
});
*/

var routes = require('./app/routes/approuts');
routes(app);