const tiles = document.getElementsByClassName('tile')
const tileArray = [...tiles]
let points = 0
let score = document.querySelector('.score').textContent
let winningArray = []
let userFlipArray = []
let reset = function() {
    for (let i=0; i<tileArray.length; i++) {
    tileArray[i].style.backgroundColor = '#f4bc42'}
    winningArray = []
    userFlipArray = []
    flipFourRandomTiles()
    userTileFlip()
}


let flipFourRandomTiles = function() {
    for (let i=0; i<4; i++) {
        let randomTile = tileArray[Math.floor(Math.random() * tileArray.length)]
        winningArray.push(randomTile)
    let index = tileArray.indexOf(randomTile)
    tileArray.splice(index, 1)}
    tileArray.push(winningArray[0])
    tileArray.push(winningArray[1])
    tileArray.push(winningArray[2])
    tileArray.push(winningArray[3])
    let flipReveal = setTimeout(function(){
        for (let i=0; i<winningArray.length; i++) {
            winningArray[i].style.backgroundColor = 'white'
        }}, 1000)
    let flipHide = setTimeout(function(){
        for (let i=0; i<winningArray.length; i++) {
            winningArray[i].style.backgroundColor = '#f4bc42'
        }}, 1750)
}

let userTileFlip = function() {
    for (let i=0; i<tileArray.length; i++) {
        tileArray[i].addEventListener('click', async function() {event.target.style.backgroundColor = 'white'
    })
    tileArray[i].onclick = function() {
        userFlipArray.push(tileArray[i])
        if (userFlipArray.length === 4) {
            if (((userFlipArray[0] === winningArray[0]) ||(userFlipArray[0] === winningArray[1]) || (userFlipArray[0] === winningArray[2]) || (userFlipArray[0] === winningArray[3])) && ((userFlipArray[1] === winningArray[0]) || (userFlipArray[1] === winningArray[1]) || (userFlipArray[1] === winningArray[2]) || (userFlipArray[1] === winningArray[3])) && ((userFlipArray[2] === winningArray[0]) || (userFlipArray[2] === winningArray[1]) || (userFlipArray[2] === winningArray[2]) || (userFlipArray[2] === winningArray[3])) && ((userFlipArray[3] === winningArray[0]) || (userFlipArray[3] === winningArray[1]) || (userFlipArray[3] === winningArray[2]) || (userFlipArray[3] === winningArray[3]))) {
                document.querySelector('.score').innerText = points += 1
                    setTimeout(() => {
                        let keepPlaying = window.confirm('you got a point')
                        if (keepPlaying === true) {
                            reset()
                        }
                    }, 500)
                }
            else {
                alert('you lose')
            }}
}}}

flipFourRandomTiles()
userTileFlip()

// if (score >= 3) {
//     alert('YOU WON LEVEL 1!')
// }









//FIX PROBLEM: CAN WIN IF YOU CLICK THE SAME TILE 4 TIMES
//FIX PROBLEM: ALERT HAPPENS BEFORE TILE FLIPS
//else, restart level
//if counter === 10, go to level 2
//allow users to 'unflip' until they've flipped four tiles