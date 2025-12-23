import React from 'react'
import {UserRound} from 'lucide-react'
const follower = (props) => {
  return (
    <div className='flex flex-row items-center gap-1'>
        <UserRound size={17} />
        <h1 className='font-bold'>{props.followers}</h1>
    </div>
  )
}

export default follower