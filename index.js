var game = require("./card");
var express=require('express');
var app=express();
var http = require('http');
var url = require('url');
var fs = require('fs');
var ejs = require('ejs');
var pack = game.createPack();  
var myPack = game.shufflePack(pack);  
console.log("Size of pack before draw: " + myPack.length);  
console.log("first player");
console.log("Drawing 13 cards.");  
var hand = game.draw(myPack, 13, '', true);  
console.log("Size of pack after draw: " + myPack.length);  
console.log("Cards in hand:");  
var a1=hand;
console.log(hand);  


console.log();  
//var d1= game.draw(game.shufflePack(hand), 1, '', true);

/*
console.log("second player");

console.log("Now I'll draw another 13 card");  
var hand = game.draw(myPack, 13, '', true);  
console.log("Size of pack after draw: " + myPack.length);  
console.log("Cards in hand:");  
var a2=hand;

console.log(hand);  
console.log();  
console.log("Now I'll draw another 13 card");
console.log("third player");

var hand = game.draw(myPack, 13, '', true);  
console.log("Size of pack after draw: " + myPack.length);  
console.log("Cards in hand:");  
var a3=hand;

console.log(hand);  
console.log();  
console.log("Now I'll draw another 13 card");
console.log("fourth player");

var hand = game.draw(myPack, 13, '', true);  
console.log("Size of pack after draw: " + myPack.length);  
console.log("Cards in hand:");  
console.log(hand);  
var a4=hand;
var p1=game.playCard(1, hand, 2);
console.log(p1);  
console.log("Now I'll draw another 13 card");
*/
var bodyParser = require('body-parser');

app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/lakdi',function (req, res) {
   
fs.readFile('card.html', 'utf-8', function(err, content) {
//	fs.readFile('allCards.html', 'utf-8', function(err, content) {
  
    if (err) {
      res.end('error occurred');
      return;
    }
    
  //  var renderedHtml = ejs.render(content, {a1: a1,d1:d1, a2:a2,a3:a3,a4:a4});  //get redered HTML code
      var renderedHtml = ejs.render(content, {a1: a1});
    res.end(renderedHtml);
});
})




var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})