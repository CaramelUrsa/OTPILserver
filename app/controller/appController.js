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
    var player = new Player(req.body.player_name, tempcode, booltrue);


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
