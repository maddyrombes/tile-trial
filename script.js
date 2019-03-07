const tiles = document.getElementsByClassName('tile')
const tileArray = [...tiles]
let points = 0
let winningArray = []
let userFlipArray = []

let flipTile = function() {
    for (let i=0; i<tileArray.length; i++) {
        tileArray[i].style.backgroundColor = '#f4bc42'}
}

let resetTiles = function() {
    flipTile()
    winningArray = []
    userFlipArray = []
    flipFourRandomTiles()
    userTileFlip()
}

let playGame = function() {
    document.querySelector('.score').innerText = 0
    flipTile()
    winningArray = []
    userFlipArray = []
    flipFourRandomTiles()
    userTileFlip()
}

let randomTilesTimeout = function() {
    setTimeout(() => {
        for (let i=0; i<winningArray.length; i++) {
            winningArray[i].style.backgroundColor = 'white'
        }}, 1000)
    setTimeout(() => {
        for (let i=0; i<winningArray.length; i++) {
            winningArray[i].style.backgroundColor = '#f4bc42'
        }}, 1750)
    }

let randomize = function() {
for (let i=0; i<4; i++) {
    let randomTile = tileArray[Math.floor(Math.random() * tileArray.length)]
    winningArray.push(randomTile)
    let index = tileArray.indexOf(randomTile)
    tileArray.splice(index, 1)}
}

let flipFourRandomTiles = function() {
    randomTilesTimeout()
    randomize()
    tileArray.push(winningArray[0])
    tileArray.push(winningArray[1])
    tileArray.push(winningArray[2])
    tileArray.push(winningArray[3])
}

let compareArrays = function() {
    if (((userFlipArray[0] === winningArray[0]) ||(userFlipArray[0] === winningArray[1]) || (userFlipArray[0] === winningArray[2]) || (userFlipArray[0] === winningArray[3])) && ((userFlipArray[1] === winningArray[0]) || (userFlipArray[1] === winningArray[1]) || (userFlipArray[1] === winningArray[2]) || (userFlipArray[1] === winningArray[3])) && ((userFlipArray[2] === winningArray[0]) || (userFlipArray[2] === winningArray[1]) || (userFlipArray[2] === winningArray[2]) || (userFlipArray[2] === winningArray[3])) && ((userFlipArray[3] === winningArray[0]) || (userFlipArray[3] === winningArray[1]) || (userFlipArray[3] === winningArray[2]) || (userFlipArray[3] === winningArray[3]))) {
        return true
    } else { return false
}}

let gainOnePoint = function() {
    document.querySelector('.score').innerText = points += 1;  
    setTimeout(() => {
        resetTiles()
    }, 500)
}

let lose = function() {
    setTimeout(() => {
        let playAgain = window.confirm('rats, you lose. play again?')
        if (playAgain === true) {
        playGame()}
    }, 250)
}

let winAlert = function() {
    if (document.querySelector('.score').innerText === 2) { alert('YOU WON LEVEL 1!')
}}
winAlert()

let userTileFlip = function() {
    for (let i=0; i<tileArray.length; i++) {
        tileArray[i].addEventListener('click', function() {event.target.style.backgroundColor = 'white'
    })
    tileArray[i].onclick = function() {
        userFlipArray.push(tileArray[i])
        if (userFlipArray.length === 4) {
            if (compareArrays() === true) {
                gainOnePoint()
            } else { lose() }
}}}}


flipFourRandomTiles()
userTileFlip()