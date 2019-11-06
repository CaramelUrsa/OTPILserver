'use strict';
module.exports = function(app) {
    var mc = ('../model/db');
    var todoList = require('../controller/appController');
    var roomMod = require('../model/roomModel');
    var A = '';
    var B = '';

app.route('/room').post(todoList.create_a_room);
app.route('/getRooms').get(todoList.get_all_rooms);
app.route('/getPlayers').get(todoList.get_all_players);
};