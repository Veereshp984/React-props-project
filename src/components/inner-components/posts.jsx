import React from 'react'
import { Archive } from 'lucide-react'
const posts = (props) => {
  return (
    <div className='flex flex-row items-center gap-1'>
        <Archive size={17} />
        <h2 className='font-bold'>{props.posts}</h2>
    </div>
  )
}

export default posts