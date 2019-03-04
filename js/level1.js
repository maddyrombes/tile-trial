//CLICK TO FLIP BLOCKS FUNCTION

let blocks = document.getElementsByClassName('block')
let blockFlip = function() {
for (let i=0; i<blocks.length; i++) {
    blocks[i].addEventListener('click', function() {
        event.target.style.backgroundColor = 'blue'
    })
}}


//GET FOUR RANDOM BLOCKS TO FLIP

let blockArray = [...blocks]


let randomBlock = function() {
    return blockArray[Math.floor(Math.random() * blockArray.length)]
}

let randomBlocksArr = []

randomBlocksArr.push(randomBlock())
randomBlocksArr.push(randomBlock())
randomBlocksArr.push(randomBlock())
randomBlocksArr.push(randomBlock())

//BUG: THIS IS ALLOWING FOR REPEATS. NEED TO FIX.

let startTime = setTimeout(function(){
    for (let i=0; i<randomBlocksArr.length; i++) {
        randomBlocksArr[i].style.backgroundColor = 'blue'
    }}, 500)



