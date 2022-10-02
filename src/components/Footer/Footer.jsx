import React from 'react'
import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="bottom-footer">
          <div className="followme-wrap-footer">
            <div className="social-media-footer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/lotfi__bkz/"
              >
                <FaInstagram size={30} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/BouakkazLotfiG"
              >
                <FaGithub size={30} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ghanilotfibouakkaz/"
              >
                <FaLinkedin size={30} />
              </a>
            </div>

            <div className="back-btn-wrap">
              <a href="#header" className="back-btn">
                <AiOutlineArrowUp />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="text">
            Made by <span>Lotfi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer