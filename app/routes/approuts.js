'use strict';
module.exports = function(app) {
    var mc = ('../model/db');
    var todoList = require('../controller/appController');
    var roomMod = require('../model/roomModel');
    var A = '';
    var B = '';

app.route('/room').post(todoList.create_a_room);
app.route('/getPlayers').post(todoList.get_all_players);
app.route('/player').post(todoList.create_a_player);
app.route('/test').post(todoList.test);
};