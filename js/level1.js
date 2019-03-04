//CLICK TO FLIP BLOCKS FUNCTION

let blocks = document.getElementsByClassName('block')
let blockFlip = function() {
for (let i=0; i<blocks.length; i++) {
    blocks[i].addEventListener('click', function() {
        event.target.style.backgroundColor = 'blue'
    })
}}

//BLOCK ARRAY

let blockArray = [...blocks]

//GET FOUR RANDOM BLOCKS

let randomBlock = function() {
    return blockArray[Math.floor(Math.random() * blockArray.length)]
}

let random1 = randomBlock()
let random2 = randomBlock()
let random3 = randomBlock()
let random4 = randomBlock()

let randomBlocksArr = [random1, random2, random3, random4]