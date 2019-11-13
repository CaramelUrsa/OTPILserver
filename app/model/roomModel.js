'use strict';
var sql = require('./db.js');

var Room =function(code){
    this.roomcode = code;
};

var EditReq = function(ColToEdit, setTo, Name){
    this.toedit = ColToEdit;
    this.setto = setTo;
    this.name = Name
};

Room.createRoom = function(room, result) {
    sql.query("INSERT INTO rooms set ?", room, function(err, res) {
        if(err) {
            console.log("error: ",err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, room);
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

Room.getPlayers = function(result) {
    sql.query('SELECT * FROM players', function(err, res) {
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

Room.genCode = function(length, result) {
    var res = 0;
    while(res < Math.pow(10, length - 1)){
        console.log('loop');
    res = Math.floor(Math.random() * Math.pow(10, length));
    }
    result(res);
}

Room.editPlayer = function(editReq ,result) {
    sql.query('UPDATE `TOTPAL`.`players` SET `'+editReq.toedit+'`='+editReq.setto+' WHERE `idplayers`='+editReq.name+';', function (err, res){
        if(err) throw err;
        res.send(JSON.stringify(res))
    });
};

module.exports = Room;