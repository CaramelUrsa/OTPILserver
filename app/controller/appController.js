'use strict';

//import {Room} from '../model/roomModel.js';
var Room = require('../model/roomModel.js');
var Player = require('../model/playerModel.js');

exports.create_a_room = function (req, res) {

    var tempcode = '';

    Room.genCode(
        4,
        function (generatedcode) {
            tempcode = generatedcode.toString();
            console.log(tempcode)
        }

    )
    var booltrue = 1;
    var room = new Room(tempcode);
    var player = new Player(req.body.player_name, tempcode, booltrue, 0);


    if (!req.body.player_name) {
        console.log(req);
        res.status(400).send({ error: true, message: 'Please provide player' });
    }
    else {
        Room.createRoom(room,

            function (err, room) {
                console.log('Creating room...');
                res.json(room);
            }
        );


        Player.createPlayer(player,

            function (err, player) {
                console.log('Creating player...');
                res.json(player);
            }
        );

    }
};

exports.get_all_rooms = function (req, res) {
    Room.getRooms(
        function (err, room) {
            console.log(room);
            res.json(room);
        }
    )
}

exports.create_a_player = function (req, res) {
    if (!req.body.room_code) {
        res.status(400).send({ error: true, message: 'Null field: room_code' });
    } else {
        if (!req.body.player_name) {
            res.status(400).send({ error: true, message: 'Null field: player_name' });
        } else {
            var player = new Player(req.body.player_name, req.body.room_code, 0);
            Player.createPlayer(player,

                function (err, player) {
                    console.log('Creating player...');
                    res.json(player);
                })
            res.json(player);
        }
    }
}

exports.get_room_players = function (req, res) {
    if (!req.body.room_code) {
        res.status(400).send({ error: true, message: 'Null field: room_code' });
    } else {
        Player.getRoomPlayers(
            function (err, players) {
                res.send(players);
            },
            req.body.room_code
        )
    }
}

exports.start_the_game = function (req, res) {
    if (!req.body.room_code) {
        res.status(400).send({ error: true, message: 'Null field: room_code' });
    } else {
        if (!req.body.field) {
            res.status(400).send({ error: true, message: 'Null field: field' });
        } else {
            Room.startGame(req.body.field, req.body.room_code,
                function (err) {
                    res.send('done');
                },
                req.body.room_code
            )
        }
    }
}