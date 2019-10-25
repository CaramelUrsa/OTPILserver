'use strict';
var sql = require('./db.js');

var Room =function(code){
    this.roomcode = code;
};

Room.createRoom = function(room, result) {
    sql.query("INSERT INTO rooms set ?", room, function(err, res) {
        if(err) {
            console.log("error: ",err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Room.getRooms = function(result) {
    sql.query('SELECT * FROM rooms', function(err, res) {
        if(err) {
            console.log('error: ',err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res);
        }
    });
}

Room.genCode = function() {
    var code = Math.floor((Math.random()) * 10000)
    console.log('newcode:' + code)
}

module.exports = Room;