let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
]  
let turn = true
function getValue() {
    return (turn) ? 'x' : 'o'
}
const board = document.querySelector('.grid-board')

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j ++) {
        
        let cellDiv = document.createElement('div')
        cellDiv.setAttribute('id','cell')
        cellDiv.setAttribute('data-position',`${i}${j}`)
        cellDiv.innerText = gameBoard[i][j]
        cellDiv.style.background = 'lightskyblue'
        board.appendChild(cellDiv)
    }
}

board.addEventListener('click',(e) => {
    const targetDiv = e.target

    if(targetDiv.id === 'cell') {
        let pos = targetDiv.getAttribute('data-position')
        const row = parseInt(pos[0])
        const col = parseInt(pos[1])

        gameBoard[row][col] = getValue()
        turn = !turn
        targetDiv.innerText = gameBoard[row][col]
        
    }
})


