import React from 'react'
import "./Hero.css"
import Navbar from "../Navbar/Navbar";
import { images } from '../../constants'


const Hero = () => {
  return (
      <header id="header">
          <div className="overlay overlay-lg">
          <img src={images.square} className="shape square" alt="" />
          <img src={images.circle} className="shape circle" alt="" />
          <img
            src={images.halfcircle}
            className="shape half-circle1"
            alt=""
          />
          <img
            src={images.halfcircle}
            className="shape half-circle2"
            alt=""
          />
          <img src={images.x} className="shape xshape" alt="" />
          <img src={images.wave} className="shape wave wave1" alt="" />
          <img src={images.wave} className="shape wave wave2" alt="" />
          <img src={images.triangle} className="shape triangle" alt="" />
          <img src={images.letters} className="letters" alt="" />
          <img src={images.points1} className="points points1" alt="" />
        </div>

          
          <Navbar />
          
          <div className="header-content">
          <div className="container grid-2">
            <div className="column-1">
              <h1 className="header-title">Lotfi Bouakkaz</h1>
              <p className="text">
                Hello, I'm Miley Brewer, web design and developer. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Totam magni sit
                hic!
              </p>
              <a href="#" className="btn">Download CV</a>
            </div>

            <div className="column-2 image">
              <img
                src={images.points2}
                className="points points2"
                alt=""
              />
              <img src={images.person} className="img-element z-index" alt="" />
            </div>
          </div>
        </div>
        
    </header>
  )
}

export default Hero