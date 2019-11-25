'use strict';
module.exports = function(app) {
    var mc = ('../model/db');
    var todoList = require('../controller/appController');
    var roomMod = require('../model/roomModel');
    var A = '';
    var B = '';

app.route('/room').post(todoList.create_a_room);
app.route('/player').post(todoList.create_a_player);
app.route('/roomPlayers').post(todoList.get_room_players);
app.route('/joingame').post(todoList.join_a_game);
};