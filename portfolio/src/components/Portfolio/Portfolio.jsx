import React from 'react'
import "./Portfolio.css"
import { images } from '../../constants'
import {projects} from "../../Data"

const Portfolio = () => {
  return (
    <section class="portfolio section" id="portfolio">
        <div class="background-bg">
          <div class="overlay overlay-sm">
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
            <img src={images.square} class="shape square" alt="" />
            <img src={images.wave} class="shape wave" alt="" />
            <img src={images.circle} class="shape circle" alt="" />
            <img
              src={images.triangle}
              class="shape triangle"
              alt=""
            />
            <img src={images.x} class="shape xshape" alt="" />
          </div>
        </div>

        <div class="container">
          <div class="section-header">
            <h3 class="title" data-title="My works">Portfolio</h3>
          </div>

          <div class="section-body">
            <div class="filter">
              <button class="filter-btn active" data-filter="*">All</button>
              <button class="filter-btn" data-filter=".ui">UI/UX</button>
              <button class="filter-btn" data-filter=".webdev">Web Dev</button>
              <button class="filter-btn" data-filter=".appdev">
                Mobile App
              </button>
              <button class="filter-btn" data-filter=".logo-design">
                Logo Design
              </button>
            </div>

        <div className="grid">          
            <div class="grid-item webdev">
                <div class="gallery-image">
                    <img src={images.port1}alt="" />
                    <div class="img-overlay">
                        <div class="plus"></div>
                        <div class="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>              
            <div class="grid-item webdev">
                <div class="gallery-image">
                    <img src={images.port2}alt="" />
                    <div class="img-overlay">
                        <div class="plus"></div>
                        <div class="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>              
            <div class="grid-item webdev">
                <div class="gallery-image">
                    <img src={images.port3}alt="" />
                    <div class="img-overlay">
                        <div class="plus"></div>
                        <div class="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>              
            <div class="grid-item ui">
                <div class="gallery-image">
                    <img src={images.port4}alt="" />
                    <div class="img-overlay">
                        <div class="plus"></div>
                        <div class="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>              
            <div class="grid-item ui">
                <div class="gallery-image">
                    <img src={images.port5}alt="" />
                    <div class="img-overlay">
                        <div class="plus"></div>
                        <div class="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>              
                  
            
            
              
                      
             
                      
            </div>
            <div class="more-folio">
              <a href="#" class="btn">More Folio</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Portfolio