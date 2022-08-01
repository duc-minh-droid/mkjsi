import React from 'react'
import Row from './Row'

function Table() {
  return (
    <div className="mt-6 w-full flex shrink-0 justify-center">
        <table className='table-auto w-8/12 border-collapse border border-slate-400'>
          <tbody>
            <tr className='bg-black text-white first:pl-4'>
                <td className='py-4 pl-8'>NAME</td>
                <td className='py-4'>DESIGNATION</td>
                <td className='py-4'>STATUS</td>
                <td className='py-4'>ROLE</td>
                <td className='py-4'></td>
            </tr>
            {[1,2,3,4,5].map(e=><Row key={e}></Row>)}

          </tbody>
        </table>
    </div>
  )
}

export default Table