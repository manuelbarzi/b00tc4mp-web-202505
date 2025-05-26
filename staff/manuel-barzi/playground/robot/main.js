var robot = document.querySelector('.robot-head')

var step = 10
var x = 100
var y = 200

robot.style.left = x + 'px'
robot.style.top = y + 'px'

document.addEventListener('keydown', function (event) {
    var key = event.key

    console.log(key)

    if (key === 'ArrowDown') {
        y = y + step
    } else if (key === 'ArrowUp') {
        y = y - step
    } else if (key === 'ArrowLeft') {
        x = x - step
    } else if (key === 'ArrowRight') {
        x = x + step
    }

    robot.style.left = x + 'px'
    robot.style.top = y + 'px'
})

var robotButtonLeft = document.querySelector('.robot-button-left')

robotButtonLeft.addEventListener('click', function (event) {
    x = x - step

    robot.style.left = x + 'px'
})

var robotButtonRight = document.querySelector('.robot-button-right')

robotButtonRight.addEventListener('click', function (event) {
    x = x + step

    robot.style.left = x + 'px'
})

var robotButtonUp = document.querySelector('.robot-button-up')

robotButtonUp.addEventListener('click', function (event) {
    y = y - step

    robot.style.top = y + 'px'
})


var robotButtonDown = document.querySelector('.robot-button-down')

robotButtonDown.addEventListener('click', function (event) {
    y = y + step

    robot.style.top = y + 'px'
})