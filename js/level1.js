let tiles = document.getElementsByClassName('tile')
let tileArray = [...tiles]

let randomTile = function() {
    return tileArray[Math.floor(Math.random() * tileArray.length)]
}

let random1 = randomTile()
let index1 = tileArray.indexOf(random1)
tileArray.splice(index1, 1)
let random2 = randomTile()
let index2 = tileArray.indexOf(random2)
tileArray.splice(index2, 1)
let random3 = randomTile()
let index3 = tileArray.indexOf(random3)
tileArray.splice(index3, 1)
let random4 = randomTile()

let randomTilesArr = [random1, random2, random3, random4]

let flipReveal = setTimeout(function(){
    for (let i=0; i<randomTilesArr.length; i++) {
        randomTilesArr[i].style.backgroundColor = 'white'
    }}, 500)

let flipHide = setTimeout(function(){
    for (let i=0; i<randomTilesArr.length; i++) {
        randomTilesArr[i].style.backgroundColor = '#f4bc42'
    }}, 1250)


//USER FLIP FUNCTION & MATCH W/ RANDOMS



let tileFlip = function() {
for (let i=0; i<tiles.length; i++) {
    tiles[i].addEventListener('click', function() {
        event.target.style.backgroundColor = 'white'
        return tiles[i]
    })
}}

let userFlip1 = tileFlip()
let userFlip2 = tileFlip()
let userFlip3 = tileFlip()
let userFlip4 = tileFlip()

let testMatch = function () {
    if (userFlip1 === (randomTilesArr[0] || randomTilesArr[1] || randomTilesArr[2] || randomTilesArr[3])) {
    console.log('yes')}
else {console.log('no')}
}

testMatch()


//if randomTilesArray === tiles flipped, add 1 to counter
//else, restart level
//if counter === 10, go to level 2
//allow users to 'unflip' until they've flipped four tiles