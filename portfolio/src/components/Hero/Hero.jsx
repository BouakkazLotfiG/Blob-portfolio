import React from 'react'
import "./Hero.css"
import Navbar from "../Navbar/Navbar";
import { images } from '../../constants'
import {motion } from 'framer-motion'
import {FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import {AiOutlineArrowUp} from 'react-icons/ai'



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
            <p className="text">
                Hello, I'm
              </p>
              <h1 className="header-title">Lotfi Bouakkaz</h1>
              <p className="text">
                and i'm a Web application developer. 
              </p>
              
                <a href="#" className="btn">Download CV</a>

                <div className="followme-wrap">
                  <div className="followme">
                    
                    <div className="social-media">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lotfi__bkz/">
                        <FaInstagram size={30}/>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/BouakkazLotfiG">
                        <FaGithub size={30}/>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ghanilotfibouakkaz/">
                        <FaLinkedin size={30}/>
                      </a>
                    </div>
                  </div>
          </div> 
              
            </div>
           

            <div className="column-2 image">
              <img
                src={images.points2}
                className="points points2"
                alt=""
              />
              <motion.div
              animate={{ x: 100 }}
              transition={{ ease: "easeOut", duration: 2 }}
>
              <img src={images.person} className="img-element z-index" alt="" />
              </motion.div>
            </div>
          </div>
        </div>
        
    </header>
  )
}

export default Hero