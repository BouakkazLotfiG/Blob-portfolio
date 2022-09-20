import React from 'react'
import "./Navbar.scss"
import { images } from '../../constants'
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
          <div className="container">
            <div className="logo">
              <img src={images.logo} />
            </div>

            <div className="links">
              <ul>
                <li>
                  <a href="#header">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#hireme" className="active">Hire me</a>
                </li>
              </ul>
            </div>

            {/* <div className="hamburger-menu">
              <div className="bar"></div>
            </div> */}



            <div className="app__navbar-menu">
              <HiMenuAlt4 onClick={() => setToggle(true)} />

              {toggle && (
                <motion.div
                  whileInView={{ x: [300, 0] }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                  <HiX onClick={() => setToggle(false)} />
                  <ul>
                    {['home', 'services', 'portfolio', 'about', 'contact'].map((item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>


          </div>
        </nav>
  )
}

export default Navbar