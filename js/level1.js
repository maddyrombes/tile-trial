let blocks = document.getElementsByClassName('block')
// let blocksArray = [...blocks]


for (let i=0; i<blocks.length; i++) {
    blocks[i].addEventListener('click', function() {
        event.target.style.backgroundColor = 'blue'
    })
}