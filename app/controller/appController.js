'use strict';

//import {Room} from '../model/roomModel.js';
var Room = require('../model/roomModel.js');
var Player = require('../model/playerModel.js');
var EditReq = require('../model/roomModel.js');

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
        function (err, rooms) {
            console.log(rooms);
            var codelist = [];
            for (var i = 0; i < rooms.length; i++) {
                codelist.push(rooms[i].roomcode);
            }
            Room.genCode(
                4,
                function (generatedcode) {
                    generatedcode = generatedcode.toString();
                    res.send(generatedcode)
                }

            )
        }
    )
}

exports.get_all_players = function (req, res) {
    Room.getPlayers(
        function (err, players) {
            console.log(players);
            var playerlist = [];
            for (var i = 0; i < players.length; i++) {
                playerlist.push(players[i]);
            }
            if (!req.body.wanted_code) {
                console.log(req);
                res.status(400).send({ error: true, message: 'Please provide desired room code' });
            } else {
                var wantedCode = req.body.wanted_code;
                var wantedList = [];
                for (var i = 0; i < playerlist.length; i++) {
                    if (playerlist[i].leader_status == wantedCode) {
                        wantedList.push(playerlist[i])
                    } else {

                    }
                }
                res.send(wantedList);
            }
        }
    )
}

exports.create_a_player = function (req, res) {
    if (!req.body.game_code) {
        res.status(400).send({ error: true, message: 'Please provide the code of the room' });
    } else {
        if (!req.body.player_name) {
            res.status(400).send({ error: true, message: 'Please provide the code of the room' });
        } else {
            var player = new Player(req.body.player_name, req.body.game_code, 0, 0);
            Player.createPlayer(player,

                function (err, player) {
                    console.log('Creating player...');
                    res.json(player);
                })
            res.send(player);
        }
    }
}

exports.edit_a_player = function (req, res) {
    if (!req.body.Name) {
        res.status(400).send({ error: true, message: 'Please provide the name of the player you would like to edit' });
    } else {
        if (!req.body.ToEdit) {
            res.status(400).send({ error: true, message: 'Please provide the name of the feild you wish to edit' });
        } else {
            if (!req.body.SetTo) {
                res.status(400).send({ error: true, message: 'Please provide the desired value to set the feild to' });
            } else {
                var editReq = new EditReq(req.body.ToEdit, req.body.SetTo, req.body.Name)
                Room.editPlayer(editReq,
                    function (err, editReq) {
                        console.log('Editing player...');
                        res.json(editReq);
                    });
            }
        }
    }
}