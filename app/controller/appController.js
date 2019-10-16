'use strict';

var Room = require('../model/appModel.js');



exports.create_a_room = function(req, res) {
    var new_room = new Room("8878");

    if(!new_task.task || !new_task.status){
        res.status(400).send({error:true, message: 'Please provide task/status' });
    }
    else{
        Room.createTask(new_room, function(err, task) {
            if (err)
            res.send(err);
            res.json(task);
        });
    }
};










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