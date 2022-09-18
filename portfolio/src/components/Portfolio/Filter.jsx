import React from 'react'
import { useEffect } from 'react'
import "./Portfolio.css"


const Filter = ({ setActiveGenre, activeGenre, project }) => {
    
    useEffect(() => {
        if (activeGenre === "fullstack") {
            se
        }
    }, [activeGenre])


  return (
    <div class="filter">
              <button onClick={() => setActiveGenre(0)} class="filter-btn active" data-filter="*">All</button>
              <button onClick={() => setActiveGenre("fullstack")} class="filter-btn" data-filter=".ui">Fullstack</button>
              <button onClick={() => setActiveGenre("frontend")} class="filter-btn" data-filter=".webdev">Frontend</button>
            </div>
  )
}

export default Filter