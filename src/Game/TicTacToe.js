import React, { useReducer } from 'react'
import Board from './Board'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
}

const notify = (x) => {
    toast.success('Game result! The winner is ' + x, { toastId: 0})
    return
}
const isTie = board => {
    let len = 0
    for (let i = 0; i < board.length; i++) {
        if (board[i] !== null) {
            len++
        }
    }
    return len===board.length
}

function TicTacToe() {
    const calcWinner = (board) => {
        const model = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0; i<model.length; i++) {
            let [a, b, c] = model[i]
            if (board[a] && board[a]===board[b] && board[a]===board[c]) {
                return board[a]
            }
        }
        return null

    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'CLICK': {
                const {board, xIsNext} = state
                const {index, winner} = action.payload
                const nextState = JSON.parse(JSON.stringify(state))
                nextState.board[index] = xIsNext ? 'X':'O'
                nextState.xIsNext = !xIsNext
                return nextState
            }
            case 'RESET': {
                const nextState = JSON.parse(JSON.stringify(state))
                nextState.board = Array(9).fill(null)
                nextState.xIsNext = !nextState.xIsNext
                return nextState
            }
            default:
                break
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const {board, xIsNext} = state
    const winner = calcWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext?'X':'O'
        dispatch({
            type: 'CLICK',
            payload: {
                index,
                winner,
            }
        })
    }
    const handleReset = ()=>{
        dispatch({type: 'RESET'})
    }
    const tie = isTie(board)
    const notifyTie = ()=>{
        toast.info("Match is tie!", {toastId: 1})
    }
  return (
    <div className="flex flex-col items-center mt-6">
        <Board cells={board} onClick={handleClick}/>
        {winner && notify(winner)}
        {tie && notifyTie()}
        <button onClick={handleReset} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Reset game</button>
    </div>
  )
}

export default TicTacToe