'use strict';

var Room = require('../model/roomModel.js');
var Player = require('../model/playerModel.js');
var roomcobe = '8878';

exports.create_a_room = function(req, res) {

    var room = new Room(roomcobe);
    var player = new Player(req.body.player_name, roomcobe);

    if(!req.body.player_name){
        console.log(req);
        res.status(400).send({error:true, message: 'Please provide player' });
    }
    else{
        Room.createRoom(room, 
            
            function(err, room) {
            console.log('Creating room...');;
            }
        );


        Player.createPlayer(player, 
            
            function(err, player) {
                console.log('Creating player...');
            }
        );

    }
};







/*
exports.list_all_tasks = function(req, res) {
    Task.getAllTask(function(err, task) {
        console.log('controller')
        if (err)
        res.send(err);
        console.log('res', task);
        res.send(task);
    });
};

exports.read_a_task = function(req, res) {
    Task.getTaskById(req.param.taskId, function(err, task) {
        iff (err)
        res.send(err);
        res.json(task);
    });
};

exports.update_a_task = function(req, res) {
    Task.updateById(req.param.taskId, new Task(req.body), function(err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
};

exports.delete_a_task = function(req, res) {
    Task.remove( req.params.taskId, function(err, task) {
        if (err)
        res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};
*/