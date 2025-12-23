import React from 'react'
import Follower from './inner-components/follower'
import Posts from './inner-components/posts'
import Button from './inner-components/button'
const bottom = (props) => {
  return (
    <div className='flex flex-row gap-4 m-4  items-center '>
      <Follower followers={props.followers} />
      <Posts posts={props.posts}/>
      <Button />
    </div>
  )
}

export default bottom