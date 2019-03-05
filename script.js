let tiles = document.getElementsByClassName('tile')
let tileArray = [...tiles]

let winningArray = [tileArray[0], tileArray[1], tileArray[2], tileArray[3]]

// let randomTile = function() {
//     return tileArray[Math.floor(Math.random() * tileArray.length)]
// }

// let random1 = randomTile()
// let index1 = tileArray.indexOf(random1)
// tileArray.splice(index1, 1)
// let random2 = randomTile()
// let index2 = tileArray.indexOf(random2)
// tileArray.splice(index2, 1)
// let random3 = randomTile()
// let index3 = tileArray.indexOf(random3)
// tileArray.splice(index3, 1)
// let random4 = randomTile()

// let winningArray = [random1, random2, random3, random4]

// let flipReveal = setTimeout(function(){
//     for (let i=0; i<winningArray.length; i++) {
//         winningArray[i].style.backgroundColor = 'white'
//     }}, 500)

// let flipHide = setTimeout(function(){
//     for (let i=0; i<winningArray.length; i++) {
//         winningArray[i].style.backgroundColor = '#f4bc42'
//     }}, 1250)



//USER FLIP FUNCTION & MATCH W/ RANDOMS


// let tileFlip = function() {
// for (let i=0; i<tiles.length; i++) {
//     tiles[i].addEventListener('click', function() {
//         event.target.style.backgroundColor = 'white'
//     })
// }}
// tileFlip()


let userFlipArray = []

for (let i=0; i<tileArray.length; i++) {
    tileArray[i].onclick = function() {
    userFlipArray.push(tileArray[i])
    console.log(userFlipArray)
    if ((userFlipArray[0] === (winningArray[0] || winningArray[1] || winningArray[2] || winningArray[3])) && (userFlipArray[1] === (winningArray[0] || winningArray[1] || winningArray[2] || winningArray[3])) && (userFlipArray[2] === (winningArray[0] || winningArray[1] || winningArray[2] || winningArray[3])) && (userFlipArray[3] === (winningArray[0] || winningArray[1] || winningArray[2] || winningArray[3]))) {
    console.log(true)
        } else {
    console.log(false)
        }
    }}




// let testMatch = function () {
//     if (userFlip1 === (winningArray[0] || winningArray[1] || winningArray[2] || winningArray[3])) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// tiles.onclick = function() {    
//     testMatch()
// }


//if winningArray === tiles flipped, add 1 to counter
//else, restart level
//if counter === 10, go to level 2
//allow users to 'unflip' until they've flipped four tiles