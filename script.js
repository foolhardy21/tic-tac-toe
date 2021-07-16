let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
]  
let turn = true
function getValue() {
    return (turn) ? 'x' : 'o'
}
function checkWinner(row,col) {
    
    if( ( ( gameBoard[row][0] === gameBoard[row][1] ) &&
            ( gameBoard[row][1] === gameBoard[row][2] ) ) || 
        ( ( gameBoard[0][col] === gameBoard[1][col] ) && 
            ( gameBoard[1][col] === gameBoard[2][col] ) ) ) {
            return true
        }
    else return false

    

    
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

        const winner = checkWinner(row,col)
        
        if(winner) {
            console.log(targetDiv.innerText)
            board.style.display = 'none'
        }
    }
})


