'use strict';
module.exports = function(app) {
    var mc = ('../model/db');
    var todoList = require('../controller/appController');
    var roomMod = require('../model/roomModel');

app.route('/room').post(todoList.create_a_room);
app.get('/getRooms', function (req, res) {
    todoList.get_all_rooms()
});
};