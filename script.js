let tiles = document.getElementsByClassName('tile')
let tileArray = [...tiles]
let points = 0
let score = document.querySelector('.score')


//RANDOM TILE

let winningArray = []

let fourRandomTiles = function() {
    for (let i=0; i<4; i++) {
        let randomTile = tileArray[Math.floor(Math.random() * tileArray.length)]
        winningArray.push(randomTile)
    let index = tileArray.indexOf(randomTile)
    tileArray.splice(index, 1)
}}

fourRandomTiles()

let flipReveal = setTimeout(function(){
    for (let i=0; i<winningArray.length; i++) {
        winningArray[i].style.backgroundColor = 'white'
    }}, 500)

let flipHide = setTimeout(function(){
    for (let i=0; i<winningArray.length; i++) {
        winningArray[i].style.backgroundColor = '#f4bc42'
    }}, 1250)



//USER FLIP

let tileFlip = function() {
for (let i=0; i<tiles.length; i++) {
    tiles[i].addEventListener('click', function() {
        event.target.style.backgroundColor = 'white'
    })
}}
tileFlip()

let userFlipArray = []

for (let i=0; i<tileArray.length; i++) {
tileArray[i].onclick = function() {
    userFlipArray.push(tileArray[i])
    if (userFlipArray.length === 4) { 
        if (((userFlipArray[0] === winningArray[0]) || (userFlipArray[0] === winningArray[1]) || (userFlipArray[0] === winningArray[2]) || (userFlipArray[0] === winningArray[3])) && ((userFlipArray[1] === winningArray[0]) || (userFlipArray[1] === winningArray[1]) || (userFlipArray[1] === winningArray[2]) || (userFlipArray[1] === winningArray[3])) && ((userFlipArray[2] === winningArray[0]) || (userFlipArray[2] === winningArray[1]) || (userFlipArray[2] === winningArray[2]) || (userFlipArray[2] === winningArray[3])) && ((userFlipArray[3] === winningArray[0]) || (userFlipArray[3] === winningArray[1]) || (userFlipArray[3] === winningArray[2]) || (userFlipArray[3] === winningArray[3]))) {
            alert('you win')
            score.innerText = points += 1
                } else {
            alert('you lose')
                } }
    else if (userFlipArray.length > 4) {
        alert('stop')
    } 
}}











//FIX PROBLEM: CAN WIN IF YOU CLICK THE SAME TILE 4 TIMES
//FIX PROBLEM: ALERT HAPPENS BEFORE TILE FLIPS
//instead of alert('you win') add 1 to counter
//else, restart level
//if counter === 10, go to level 2
//allow users to 'unflip' until they've flipped four tiles