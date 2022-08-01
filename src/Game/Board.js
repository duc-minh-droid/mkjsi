import React from 'react'
import Cell from './Cell'

function Board({cells, onClick}) {
  return (
    <div className="shrink-0 grid grid-cols-3 max-w-xl gap-4">
        {cells.map((e,i)=>{
            return <Cell className={e==='X'?'X':'O'} key={i} value={e} onClick={()=>onClick(i)} />
        })}
    </div>
  )
}

export default Board