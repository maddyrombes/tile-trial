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

let random1 = randomBlock()
let index1 = blockArray.indexOf(random1)
blockArray.splice(index1, 1)
let random2 = randomBlock()
let index2 = blockArray.indexOf(random2)
blockArray.splice(index2, 1)
let random3 = randomBlock()
let index3 = blockArray.indexOf(random3)
blockArray.splice(index3, 1)
let random4 = randomBlock()

let randomBlocksArr = [random1, random2, random3, random4]

let startTime = setTimeout(function(){
    for (let i=0; i<randomBlocksArr.length; i++) {
        randomBlocksArr[i].style.backgroundColor = 'blue'
    }}, 500)