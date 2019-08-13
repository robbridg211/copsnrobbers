const express = require('express');
const app = express();
const server = app.listen(1234);
const io = require('socket.io')(server);

var path = require("path");
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var users = {}

io.on('connection', function (socket) {

  socket.on('register', function (data) {
    if (data.name)
      users[socket.id] = {
        "name": data.name,
        "score": 0,
        "is_playing": false
      }
    console.log(users)
    
    if (Object.keys(users).length == 2) {
      console.log("start game")
      for (i in users) {
        users[i]["is_playing"] = true
      }

      io.emit("startGame", { countDown: 3 })
    }
  });

  socket.on("refresh", function (data) {
    if ('stop' in data) {
      console.log("***************SToP ******************")
      socket.broadcast.emit("update", {
        world: data.world,
        name: users[socket.id],
        score: data.score,
        stop: "jail"
      })
    } else {

      users[socket.id]["score"] = data.score
      socket.broadcast.emit("update", {
        world: data.world,
        name: users[socket.id],
        score: data.score
      })
    }

  })

  socket.on('disconnect', function () {
    // users = {}
  });

  socket.on("game_over", function () {
    users[socket.id].is_playing = false

    var flag = false
    for (i in users) {
      if (users[i].is_playing) {
        flag = true
        break

      }
    }

    if (!flag) {
      var winner = 0
      var score = 0
      for (i in users) {
        if (users[i].score > score) {
          score = users[i].score
          winner = users[i].name
        } else if (users[i].score == score) {
          winner = "Draw"
        }
      }

      io.emit("stop_game", { winner: winner })
    }
    // else{
    // socket.broadcast.emit
    // }
  })


});

app.get('/', function (req, res) {
  res.render("index");
})




