import React from 'react'
import "./Footer.css"
import {FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4">
          <div className="grid-4-col footer-about">
            <h3 className="title-sm">About</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              officiis quo officia quia?
            </p>
          </div>

          <div className="grid-4-col footer-links">
            <h3 className="title-sm">Links</h3>
            <ul>
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
            </ul>
          </div>

          <div className="grid-4-col footer-links">
            <h3 className="title-sm">Services</h3>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Dev</a>
              </li>
              <li>
                <a href="#">App Design</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">UI Design</a>
              </li>
            </ul>
          </div>

          <div className="grid-4-col footer-newstletter">
            <h3 className="title-sm">Subscribe</h3>
            <p className="text">
              Lorem ipsum dolor, sit amet ipsum dolor sit amet.
            </p>
            <div className="footer-input-wrap">
              <input type="email" className="footer-input" placeholder="Email" />
              <a href="#" className="input-arrow">
                <AiOutlineArrowUp />
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="copyright">
            <p className="text">
             Made by <span>Lotfi</span>
            </p>
          </div>

          <div className="followme-wrap">
            <div className="followme">
              <h3>Follow me</h3>
              <span className="footer-line"></span>
              <div className="social-media">
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="back-btn-wrap">
              <a href="#" className="back-btn">
                <AiOutlineArrowUp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer