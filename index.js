var game = require("./card");
var playGame = require("./playGame");
var express=require('express');
var app=express();
var http = require('http');
var url = require('url');
var fs = require('fs');
var ejs = require('ejs');

var io = require('socket.io')(http); 

var bodyParser = require('body-parser');

app.use(express.static('faces'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/lakdi',function (req, res) {
var pack = game.createPack();  
var myPack = game.shufflePack(pack); 
app.use(express.static(__dirname + '/faces'));
app.use(express.static(__dirname + '/faces'));

console.log("Size of pack before draw: " + myPack.length);  
console.log("first player");
console.log("Drawing 13 cards.");  
var hand = game.draw(myPack, 13, '', true);  
console.log("Size of pack after draw: " + myPack.length);  
console.log("Cards in hand:");  
var a1=hand;
console.log(a1);
var hand = game.draw(myPack, 13, '', true);  
var a2=hand;
var hand = game.draw(myPack, 13, '', true);  
var a3=hand;
var hand = game.draw(myPack, 13, '', true);  
var a4=hand;
console.log("a2 is"+a2);
console.log("a3 is"+a3);
console.log("a4 is"+a4);
var player1=playGame.user1(a4);
var player2=playGame.user2(a2);
var player3=playGame.user3(a3);
var player_me=playGame.user_me(a1);
console.log("card of player 1---------------"+player1);
console.log("club is"+player1[0]);
console.log("spade is"+player1[1]);
console.log("heart is"+player1[2]);
console.log("diam is"+player1[3]);
console.log("card of player 2--------------");
console.log("club is"+player2[0]);
console.log("spade is"+player2[1]);
console.log("heart is"+player2[2]);
console.log("diam is"+player2[3]);
console.log("card of player 3---------------");
console.log("club is"+player3[0]);
console.log("spade is"+player3[1]);
console.log("heart is"+player3[2]);
console.log("diam is"+player3[3]);
console.log("card of mein ------------------");
console.log("club is"+player_me[0]);
console.log("spade is"+player_me[1]);
console.log("heart is"+player_me[2]);
console.log("diam is"+player_me[3]);
console.log("try........")
console.log();
console.log(player_me[2][0]);

app.use("/", express.static(__dirname + 'cards.css'));


fs.readFile('card.html', 'utf-8', function(err, content) {
//  fs.readFile('allCards.html', 'utf-8', function(err, content) {
  
    if (err) {
      res.end('error occurred');
      return;
    }
    
      var renderedHtml = ejs.render(content, {a1: a1,a2: a2,a3: a3,a4: a4,player1:player1,player2:player2,player3:player3,player_me:player_me});
    res.end(renderedHtml);
});

})

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})