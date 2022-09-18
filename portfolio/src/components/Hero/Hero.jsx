import React from 'react'
import "./Hero.css"
import Navbar from "../Navbar/Navbar";
import { images } from '../../constants'


const Hero = () => {
  return (
      <header id="header">
          <div class="overlay overlay-lg">
          <img src={images.square} class="shape square" alt="" />
          <img src={images.circle} class="shape circle" alt="" />
          <img
            src={images.halfcircle}
            class="shape half-circle1"
            alt=""
          />
          <img
            src={images.halfcircle}
            class="shape half-circle2"
            alt=""
          />
          <img src={images.x} class="shape xshape" alt="" />
          <img src={images.wave} class="shape wave wave1" alt="" />
          <img src={images.wave} class="shape wave wave2" alt="" />
          <img src={images.triangle} class="shape triangle" alt="" />
          <img src={images.letters} class="letters" alt="" />
          <img src={images.points1} class="points points1" alt="" />
        </div>

          
          <Navbar />
          
          <div class="header-content">
          <div class="container grid-2">
            <div class="column-1">
              <h1 class="header-title">John Dorsey</h1>
              <p class="text">
                Hello, I'm Miley Brewer, web design and developer. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Totam magni sit
                hic!
              </p>
              <a href="#" class="btn">Download CV</a>
            </div>

            <div class="column-2 image">
              <img
                src="./img/shapes/points2.png"
                class="points points2"
                alt=""
              />
              <img src="./img/person.png" class="img-element z-index" alt="" />
            </div>
          </div>
        </div>
        
    </header>
  )
}

export default Hero