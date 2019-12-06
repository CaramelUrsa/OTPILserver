'use strict';
var sql = require('./db.js');

var Player = function(name, room, leader){
    this.player_name = name;
    this.room_code = room;
    this.is_leader = leader;
};

Player.createPlayer = function (player, result) {
    sql.query("INSERT INTO players set ?", player, function (err, res) {
        if(err) {
            console.log("error ",err);
            result(null, res.insertId);
        }
    });
};

Player.getRoomPlayers = function(result, room) {
    sql.query("SELECT * FROM players WHERE room_code = '"+room+"'", function(err, res) {
        if(err) {
            console.log('error: ',err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
}

Player.getNamePlayers = function(result, name) {
    sql.query("SELECT * FROM players WHERE player_name = '"+name+"'", function(err, res) {
        if(err) {
            console.log('error: ',err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
}

Player.getPlayers = function(result) {
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

module.exports = Player;