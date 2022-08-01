import React from 'react'

function Cell({value, onClick, className}) {
  return (
    <div className={`w-40 h-40 border-violet-400 border rounded shadow-lg text-center ${className}`}
        onClick={onClick}
    >
        {value}
    </div>
  )
}

export default Cell