import React from 'react'
import "./Navbar.css"
import { images } from '../../constants'

const Navbar = () => {
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
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#hireme" className="active">Hire me</a>
                </li>
              </ul>
            </div>

            <div className="hamburger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </nav>
  )
}

export default Navbar