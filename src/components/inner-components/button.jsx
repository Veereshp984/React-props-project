import React from 'react'
import {Plus} from 'lucide-react'
const button = () => {
  return (
    <div className='flex flex-row bg-gray-300 items-center rounded-2xl p-2'>
        <h2 className='text-sm font-bold'>Follow </h2>
        <Plus size={20} />
    </div>
  )
}

export default button