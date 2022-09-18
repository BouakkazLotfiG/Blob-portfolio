import React from 'react'
import "./Portfolio.css"

const Project = ({name, src}) => {
  return (
      <div>
          <h1>{name}</h1>
          <img className='item-img' src={src} alt="" />
    </div>
  )
}

export default Project