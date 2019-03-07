const level1Grid = document.querySelector('.tile-container')
const score = document.querySelector('#score')
const footer = document.querySelector('.footer')
const landingPageBtn = document.querySelector('#landing-page-btn')
const instructions = document.querySelector('h2')


let landingPage = function() {
    score.style.display = 'none'
    footer.style.display = 'none'
    level1Grid.style.display = 'none'
}

landingPage()

const tiles = document.getElementsByClassName('tile')
const tileArray = [...tiles]
let points = 0
let winningArray = []
let userFlipArray = []

let playLevelOne = function() {

    level1Grid.style.display = 'flex'
    score.style.display = 'block'
    footer.style.display = 'block'
    landingPageBtn.style.display = 'none'
    instructions.style.display = 'none'

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

let compareArrays = function(array1, array2) {
    for (let i=0; i<array2.length; i++) {
        if (array1.includes(array2[i])) {
            return true
        } else {
            return false
}}}

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
    if (document.querySelector('.score').innerText == 3) { let levelTwoQuery = window.confirm('YOU WON LEVEL 1! Move to Level 2?')
    if (levelTwoQuery === true) {
        playLevelTwo()
    }
}}

let userTileFlip = function() {
    for (let i=0; i<tileArray.length; i++) {
        tileArray[i].addEventListener('click', function() {event.target.style.backgroundColor = 'white'
    })
    tileArray[i].onclick = function() {
        userFlipArray.push(tileArray[i])
        if (userFlipArray.length === 4) {
            if (compareArrays(userFlipArray, winningArray) === true) {
                gainOnePoint()
            } else { lose() }
            winAlert()
}}}}

flipFourRandomTiles()
userTileFlip()

}


