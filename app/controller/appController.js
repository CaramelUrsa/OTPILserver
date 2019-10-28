'use strict';

//import {Room} from '../model/roomModel.js';
var Room = require('../model/roomModel.js');
var Player = require('../model/playerModel.js');

exports.create_a_room = function(req, res) {

    var tempcode = '8878';
    var room = new Room(tempcode);
    var player = new Player(req.body.player_name, tempcode);


    if(!req.body.player_name){
        console.log(req);
        res.status(400).send({error:true, message: 'Please provide player' });
    }
    else{
        Room.createRoom(room, 
            
            function(err, room) {
            console.log('Creating room...');
            res.json(player.leader_status);
            }
        );


        Player.createPlayer(player, 
            
            function(err, player) {
                console.log('Creating player...');
                res.json(player);
            }
        );

    }
};

exports.get_all_rooms = function (req, res) {
    Room.getRooms(
        function(err, rooms) {
            console.log(rooms);
            var codelist = [];
            for(var i = 0;i < rooms.length; i++){
                codelist.push(rooms[i].roomcode);
            }
            Room.genCode(
                4,
                function(generatedcode) {
                    generatedcode = generatedcode.toString();
                    res.send(generatedcode)
                }
            )

        }
    )
}
