import React from 'react'
import Top from './top'
import Middle  from './middle'
import Bottom from './bottom'
const Card = (props) => {
  return (
    <div className="flex flex-col bg-white w-60 h-85 m-4 items-center justify-between rounded-4xl">
        <Top image={props.image}/>
        <Middle name={props.name} role={props.role}/>
        <Bottom followers={props.followers} posts={props.posts}/>
    </div>
  )
}

export default Card