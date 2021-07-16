const gameBoard = (() => {
     
    const gameboard = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    const ROWS = 3
    const COLS = 3

    const createBoard = () => {
        
        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j ++) {
                    
                const cellDiv = document.createElement('div')
                cellDiv.setAttribute('id','cell')
                cellDiv.setAttribute('data-position',`${i}${j}`)
                cellDiv.style.background = 'lightskyblue'
                boardDiv.appendChild(cellDiv)
            }
        }
    }
    const setCellValue = (row,col,value) => {

        gameboard[row][col] = value
    }
    const checkWinner = (row,col,value) => {
            
        const rowEvery =  gameboard[row].every((element) => {
                return element == value
            })

        const column = gameboard.map(item => item[col])
        
        const colEvery = column.every((element) => {
                return element == value
            })

        return ( rowEvery || colEvery ) ? true : false

    }
    const isBoardFull = () => {

        for( let i = 0; i < ROWS; i++) {
            const row = gameboard[i]

            if( row.some( (element) => element == '') ) {
                return false
            }
        }

        return true
    }

    return { createBoard, checkWinner, setCellValue, isBoardFull }
    
})()

function Player(playerName,playerValue) {
    
    const name = playerName
    const value = playerValue
    let turn = false
    
    const changeTurn = () => {
        turn = !turn
    }
    const getName = () => {
        return name
    }
    const getValue = () => {
        return value
    }
    const getTurn = () => {
        return turn
    }
    
    return { changeTurn, getName, getValue, getTurn }
}

const boardDiv = document.querySelector('.grid-board')
gameBoard.createBoard()
const player1 = Player('player1','x')
const player2 = Player('player2','0')
player1.changeTurn()

boardDiv.addEventListener('click',(e) => {

        if( e.target.id == 'cell' ) {

            let pos = e.target.getAttribute('data-position')
        const row = parseInt(pos[0])
        const col = parseInt(pos[1])

        let currentPlayer

        ( player1.getTurn() ) ? currentPlayer = player1 : currentPlayer = player2

        gameBoard.setCellValue(row,col,currentPlayer.getValue())
        e.target.innerText = currentPlayer.getValue()
        
        if( gameBoard.checkWinner( row, col, currentPlayer.getValue() ) ) {
        
            boardDiv.innerText = `${currentPlayer.getName()} WINS`
            
            setTimeout(() => {
                location.reload()
            },2000)
            
        
        } else if( gameBoard.isBoardFull() ) {
        
            boardDiv.innerText = `GAME DRAW`
            
            setTimeout(() => {
                location.reload()
            },2000)
        
        } else {
            console.log('playerchange')
            player1.changeTurn()
            player2.changeTurn()
        }


    }
                  
})



