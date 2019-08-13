var world = [[]]
let RIGHT = 0
let DOWN = 1
let LEFT = 2
let UP = 3
var direction = RIGHT
var worldDict = {}
var posX = 1, posY = 1;
isStarted = false
var score = 0
var world1 = [[]]

init()

function init() {
    world = 
    [['N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1'],
    ['N-1', 'N-3', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1'],
    ['N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1'],
    ['N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-1'],
    ['N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1'],
    ['N-1', 'N-1', 'N-2', 'N-2', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-2', 'N-2', 'N-1', 'N-1'],
    ['N-1', 'N-2', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-0', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-0', 'N-5', 'N-5', 'N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-2', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-0', 'N-5', 'N-5', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-2', 'N-1', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', "N-1"],
    ['N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1'],
    ['N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-1', 'N-2', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1', 'N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1', 'N-1', 'N-1', 'N-2', 'N-1'],
    ['N-1', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-2', 'N-1'],
    ['N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1', 'N-1']]


    worldDict = {
        0: 'blank',
        1: 'wall',
        2: 'coins',
        3: 'character',
        4: 'cherry',
        5: 'cop'
    }
}

$(document).ready(function () {
    var refresh_interval = ""
    var game_interval = ""
    var cop_interval = ""
    var name = prompt("Name")
    var socket = io()

    socket.emit("register", { "name": name })
    $("#world").hide()

    socket.on("stop_game", function (data) {
        clearInterval(refresh_interval)
        clearInterval(game_interval)
        clearInterval(cop_interval)
        if (data.winner != "Draw") {
            alert(`Winner is ${data.winner}`)
        } else {
            alert(`It is a draw`)
        }
    })

    var cop_speed = 200
    socket.on("startGame", function (data) {
        $("#world").show()
        drawWorld();
        drawSmallWorld();
        cop_interval = setInterval(copsSearch, cop_speed) // change to game loop)
        game_interval = setInterval(function () {

            if (direction == LEFT) { //LEFT 
                if (String(world[posX][posY - 1]).split("-")[1] != 1) {
                    world[posX][posY] = "N-0"
                    posY -= 1
                }
            }
            else if (direction == RIGHT) { //RIGHT
                if (String(world[posX][posY + 1]).split("-")[1] != 1) {
                    world[posX][posY] = "N-0"
                    posY += 1
                }
            }
            else if (direction == DOWN) { //DOWN
                if (String(world[posX + 1][posY]).split("-")[1] != 1) {
                    world[posX][posY] = "N-0"
                    posX += 1
                }
            }
            else if (direction == UP) { //UP
                if (String(world[posX - 1][posY]).split("-")[1] != 1) {
                    world[posX][posY] = "N-0"
                    posX -= 1
                }
            }

            if (String(world[posX][posY]) == "N-2") {
                score += 1
                $("#score").html(`Score: ${score}`)
            }
            world[posX][posY] = "N-3"
            drawWorld();
        }, 300)
        refresh_interval = setInterval(refresh, 250)
    })

    socket.on("update", function (data) {
        if ('stop' in data) {
            var $mainBox = $('#world1')
                .prepend('<img class="centered" src="/images/jail2.png" />')
                .css('position', 'relative'),

                $img = $mainBox.find('.centered');

            $img.css({
                position: 'absolute',
                height: '410px',
                width: '450px'

            });
        } else {
            world1 = data.world.slice(0)
            $("#player1_name").html(`${data.name.name}: ${data.score} points`)
            drawSmallWorld()
        }
    })


    function refresh() {
        drawWorld()
        socket.emit("refresh", {
            world: world,
            score: score
        })
    }

    document.onkeydown = function (e) {
        if (e.keyCode == 37) { //LEFT 
            if (String(world[posX][posY - 1]).split("-")[1] != 1) {
                direction = LEFT
            }
        } else if (e.keyCode == 39) { //RIGHT
            if (String(world[posX][posY + 1]).split("-")[1] != 1) {
                direction = RIGHT
            }
        } else if (e.keyCode == 40) { //DOWN
            if (String(world[posX + 1][posY]).split("-")[1] != 1) {
                direction = DOWN
            }
        } else if (e.keyCode == 38) { //UP
            if (String(world[posX - 1][posY]).split("-")[1] != 1) {
                direction = UP
            }
        }
    }

    function drawWorld() {
        output = "";

        for (var row = 0; row < world.length; row++) {
            output += "<div class = 'row'>"
            for (var x = 0; x < world[row].length; x++) {
                if (world[row][x] == 3) {
                    posX = row
                    posY = x
                }
                output += "<div class = '" + worldDict[String(world[row][x]).split("-")[1]] + "'></div>"
            }
            output += "</div>"
        }
        document.getElementById("world").innerHTML = output;
    }

    function drawSmallWorld() {
        output = "";
        for (var row = 0; row < world1.length; row++) {
            output += "<div class = 'row'>"
            for (var x = 0; x < world1[row].length; x++) {
                output += "<div class = '" + worldDict[String(world1[row][x]).split("-")[1]] + "_small'></div>"
            }
            output += "</div>"
        }
        document.getElementById("world1").innerHTML = output;
    }

    function gameOver() {
        var $mainBox = $('#main')
            .prepend('<img class="centered" src="/images/jail2.png" />')
            .css('position', 'relative'),

            $img = $mainBox.find('.centered');

        $img.css({
            position: 'absolute',
            height: '840px',
            width: '900px'

        });
        clearInterval(refresh_interval)
        clearInterval(game_interval)
        clearInterval(cop_interval)
        socket.emit("game_over")

        socket.emit("refresh", {
            world: world,
            score: score,
            stop: "jail"
        })

    }

    var copsX = [12, 12, 11, 11]
    var copsY = [12, 11, 12, 11]
    var copsDir = [UP, LEFT, LEFT, LEFT]

    function copsSearch() {
        for (i in copsDir) {
            let cop = cop1Search(copsX[i], copsY[i], copsDir[i])
            copsX[i] = cop[0]
            copsY[i] = cop[1]
            copsDir[i] = cop[2]
        }
        drawWorld()

    }

    function getChoice(cop1X, cop1Y, currDir) {
        var choice = []
        if (world[cop1X][cop1Y - 1] != "N-1" &&
            world[cop1X][cop1Y - 1] != "N-5" && 
            currDir != RIGHT)
            choice.push(LEFT)

        if (world[cop1X][cop1Y + 1] != "N-1" &&
            world[cop1X][cop1Y + 1] != "N-5" &&
            currDir != LEFT)
            choice.push(RIGHT)

        if (world[cop1X - 1][cop1Y] != "N-1" &&
            world[cop1X - 1][cop1Y] != "N-5" &&
            currDir != DOWN
            )
            choice.push(UP)

        if (world[cop1X + 1][cop1Y] != "N-1" &&
            world[cop1X + 1][cop1Y] != "N-5" &&
            currDir != UP)
            choice.push(DOWN)
    
        return choice[ Math.floor(Math.random() * choice.length)]
    }

    function cop1Search(cop1X, cop1Y, cop1Dir) {
        var choice = getChoice(cop1X, cop1Y, cop1Dir)
        console.log(choice)
        if (choice == LEFT) {

            if (world[cop1X][cop1Y - 1] != "N-1" &&
                world[cop1X][cop1Y - 1] != "N-5") {
                world[cop1X][cop1Y] = "N-0"
                cop1Y -= 1
            } else {
                cop1Dir = choice
            }

        } else if (choice == RIGHT) {
            if (world[cop1X][cop1Y + 1] != "N-1" &&
                world[cop1X][cop1Y + 1] != "N-5") {
                world[cop1X][cop1Y] = "N-0"
                cop1Y += 1
            } else {
                cop1Dir = choice
            }
        } else if (choice == UP) {
            if (world[cop1X - 1][cop1Y] != "N-1" &&
                world[cop1X - 1][cop1Y] != "N-5") {
                world[cop1X][cop1Y] = "N-0"
                cop1X -= 1
            } else {
                cop1Dir = choice
            }
        } else if (choice == DOWN) {
            if (world[cop1X + 1][cop1Y] != "N-1" &&
                world[cop1X + 1][cop1Y] != "N-5") {
                world[cop1X][cop1Y] = "N-0"
                cop1X += 1
            } else {
                cop1Dir = choice
            }
        }

        if (world[cop1X][cop1Y] == "N-3") {
            score = -1
            gameOver()
        }


        world[cop1X][cop1Y] = "N-5"

        return [cop1X, cop1Y, cop1Dir]

    }
})


