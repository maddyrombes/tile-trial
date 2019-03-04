let blocks = document.getElementsByClassName('block')
let blockFlip = function() {
for (let i=0; i<blocks.length; i++) {
    blocks[i].addEventListener('click', function() {
        event.target.style.backgroundColor = 'blue'
    })
}}

let blockArray = [...blocks]

let randomBlocks = function() {
    for (let i=0; i<3; i++) {
    console.log(blockArray[Math.floor(Math.random() * blockArray.length)])
    }
}

console.log(randomBlocks())

