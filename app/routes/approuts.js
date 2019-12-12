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
app.route('/namePlayers').post(todoList.get_name_players);
app.route('/grooms').post(todoList.get_all_rooms);
app.route('/gamestart').post(todoList.start_the_game);
app.route('/article').post(todoList.create_an_article);
app.route('/garticle').post(todoList.get_all_articles);
app.route('/groomticle').post(todoList.get_room_articles);
app.route('/aprove').post(todoList.article_aprove);
app.route('/decline').post(todoList.article_decline);
};