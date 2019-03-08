const grid = document.querySelector('.tile-container')
let score = document.querySelector('#score')
const landingPageBtn = document.querySelector('#landing-page-btn')
const instructions = document.querySelector('h2')

let landingPage = function() {
    score.style.display = 'none'
    grid.style.display = 'none'
}

landingPage()

const tiles = document.getElementsByClassName('tile')
const tileArray = [...tiles]
let points = 0
let winningArray = []
let userFlipArray = []
let winningArrayEval = []
let userFlipArrayEval = []

let playGame = function() {

    grid.style.display = 'flex'
    score.style.display = 'block'
    landingPageBtn.style.display = 'none'
    instructions.style.display = 'none'

let flipTile = function() {
    for (let i=0; i<tileArray.length; i++) {
        tileArray[i].style.backgroundColor = '#A95097'}
}

let resetTiles = function() {
    flipTile()
    winningArray = []
    userFlipArray = []
    userFlipArray = []
    userFlipArrayEval = []
    newArr = []
    flipFiveRandomTiles()
    userTileFlip()
}

let playGame = function() {
    document.querySelector('.score').innerHTML = points = 0
    resetTiles()
}

let randomTilesTimeout = function() {
    setTimeout(() => {
        for (let i=0; i<winningArray.length; i++) {
            winningArray[i].style.backgroundColor = '#3C537C'
        }}, 1000)
    setTimeout(() => {
        for (let i=0; i<winningArray.length; i++) {
            winningArray[i].style.backgroundColor = '#A95097'
        }}, 1700)
    }

let randomize = function() {
for (let i=0; i<5; i++) {
    let randomTile = tileArray[Math.floor(Math.random() * tileArray.length)]
    winningArray.push(randomTile)
    let index = tileArray.indexOf(randomTile)
    tileArray.splice(index, 1)}
}

let flipFiveRandomTiles = function() {
    randomTilesTimeout()
    randomize()
    for (let i=0; i<winningArray.length; i++) {
        tileArray.push(winningArray[i])
    }
}

let compareArrays = function(array1, array2) {
    let newArr = []
    for (let i=0; i<array2.length; i++) {
        if (array1.includes(array2[i])) {
            newArr.push(true)
        } else {
            newArr.push(false)
    }} if ((newArr[0] === true) && (newArr[1] === true) && (newArr[2] === true) && (newArr[3] === true) && (newArr[4] === true)) {
        return true
    } else {
        return false
    }
}

let gainOnePoint = function() {
    document.querySelector('.score').innerHTML = points += 1;  
    setTimeout(() => {
        resetTiles()
    }, 500)
}

let winAlert = function() {
    setTimeout(() => {
        let winPlayAgain = window.confirm('YOU WON THE GAME! Want to play again?')
        if (winPlayAgain === true) {
            document.querySelector('.score').innerHTML = points = 0
            playGame()}
    }, 250)
}

let lose = function() {
    setTimeout(() => {
        document.querySelector('.score').innerHTML = points = 0;
        let playAgain = window.confirm('Rats, you lost. Want to try again?')
        if (playAgain === true) {
            document.querySelector('.score').innerHTML = points = 0
            playGame()}
    }, 250)
}

let userTileFlip = function() {
    for (let i=0; i<tileArray.length; i++) {
        tileArray[i].addEventListener('click', function() {
            event.target.style.backgroundColor = '#3C537C'
    })
    tileArray[i].onclick = function() {
        userFlipArray.push(tileArray[i])

        if (userFlipArray.length === 5) {
            let userId1 = userFlipArray[0].getAttribute('id')
            let userId2 = userFlipArray[1].getAttribute('id')
            let userId3 = userFlipArray[2].getAttribute('id')
            let userId4 = userFlipArray[3].getAttribute('id')
            let userId5 = userFlipArray[4].getAttribute('id')
            userFlipArrayEval.push(userId1)
            userFlipArrayEval.push(userId2)
            userFlipArrayEval.push(userId3)
            userFlipArrayEval.push(userId4)
            userFlipArrayEval.push(userId5)
            let winId1 = winningArray[0].getAttribute('id')
            let winId2 = winningArray[1].getAttribute('id')
            let winId3 = winningArray[2].getAttribute('id')
            let winId4 = winningArray[3].getAttribute('id')
            let winId5 = winningArray[4].getAttribute('id')
            winningArrayEval.push(winId1)
            winningArrayEval.push(winId2)
            winningArrayEval.push(winId3)
            winningArrayEval.push(winId4)
            winningArrayEval.push(winId5)
            setTimeout(() => { if (compareArrays(winningArrayEval, 
                userFlipArrayEval) === true) {
                gainOnePoint()
                if (document.querySelector('.score').innerHTML == 10) { 
                    winAlert()};                
                winningArrayEval = []
            } else { lose(); winningArrayEval = []; 
                document.querySelector('.score').innerHTML = points = 0
            }}, 500)
}}}}

flipFiveRandomTiles()
userTileFlip()

}