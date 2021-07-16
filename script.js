const board = document.querySelector('.grid-board')

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j ++) {
        
        let cellDiv = document.createElement('div')
        cellDiv.setAttribute('id','cell')
        cellDiv.setAttribute('data-position',`${i}${j}`)
        cellDiv.style.background = 'lightskyblue'
        board.appendChild(cellDiv)
    }
}

board.addEventListener('click',(e) => {
    const targetDiv = e.target

    if(targetDiv.id === 'cell') {
        console.log(targetDiv.getAttribute('data-position'))
    }
})


