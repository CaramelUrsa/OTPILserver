'use strict';
var sql = require('./db.js');

var Article = function(name, player, room, aproval, decline){
    this.article_name = name;
    this.player_id = player;
    this.room_code = room;
    this.aproval = aproval;
    this.decline = decline;
};

Article.createArticle = function (article, result) {
    sql.query("INSERT INTO articles set ?", article, function (err, res) {
        if(err) {
            console.log("error ",err);
            result(null, res);
        }
    });
};

Article.getArticles = function(result) {
    sql.query('SELECT * FROM articles', function(err, res) {
        if(err) {
            console.log('error: ',err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res);
        }
    });
}

module.exports = Article;