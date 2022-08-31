import React from 'react'

export default function HeroCard({obj:{name,images}}) {


  return (
    <div >
<div>{name}</div>
      <img width="100" height="100" src={images['lg']}/>
    </div>
  )
}
