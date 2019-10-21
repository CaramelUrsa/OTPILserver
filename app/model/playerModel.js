'use strict';
var sql = require('./db.js');

var Player = function(name, status){
    this.player_name = name;
    this.leader_status = status;
};

Player.createPlayer = function (player, result) {
    sql.query("INSERT INTO players set ?", player, function (err, res) {
        if(err) {
            console.log("error ",err);
            result(null, res.insertId);
        }
    });
};
module.exports = Player;