import React from 'react'
import {BadgeCheck} from 'lucide-react'
const middle = (props) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row gap-2 justify-center items-center '>
      <h1 className='text-xl font-bold'>{props.name}</h1>
      <BadgeCheck color='black'/>
      </div>
      <h2 className='text-sm px-4 font-semibold text-gray-800
'>{props.role}</h2>
      
    </div>
  )
}

export default middle