import React from 'react'

function Row() {
  return (
    <tr className="px-6 border border-slate-300">
        <td className="py-4 pl-4 flex shrink-0 gap-2">
            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt='' />
            <div className="flex flex-col">
                <p>Mira Rodeo</p>
                <p className='text-slate-400'>mirarodeo23@gmail.com</p>
            </div>
        </td>
        <td className="py-4">
            <div>
                <p>Software Developer</p>
                <p className='text-slate-400'>Development</p>
            </div>
        </td>
        <td className="py-4">
            <button className="bg-green-600 p-1 rounded-full px-2 text-slate-50">
                Active
            </button>
        </td>
        <td className="py-4">Developer</td>
        <td className="py-4 text-violet-400 hover:underline cursor-pointer">Edit</td>
    </tr>
  )
}

export default Row