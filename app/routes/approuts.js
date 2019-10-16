'use strict';
module.exports = function(app) {
    var todoList = require('../controller/appController');

app.route('/room').post(todoList.create_a_room);

};