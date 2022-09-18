import React from 'react'
import "./Portfolio.css"
import { images } from '../../constants'
import Filter from './Filter'
import { projects } from "../../Data"
import Project from './Project'
import { useState } from 'react'


const Dav = () => {

  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0);

   
  return (
    <section className="portfolio section" id="portfolio">
      

        <div className="background-bg">
          <div className="overlay overlay-sm">
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
            <img src={images.square} className="shape square" alt="" />
            <img src={images.wave} className="shape wave" alt="" />
            <img src={images.circle} className="shape circle" alt="" />
            <img
              src={images.triangle}
              className="shape triangle"
              alt=""
            />
            <img src={images.x} className="shape xshape" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="My works">Portfolio</h3>
          </div>

          <div className="section-body">
          <Filter project={Project} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />

          <div className="projects">  
            {

              projects.map(project => {
                return (
                  <Project key={project.id} name={project.name} src={project.imgSrc} />
                  
                )
              })
              
            }


            {/* <div className="grid-item ">
                <div className="gallery-image">
                    <img src={images.port1}alt="" />
                    <div className="img-overlay">
                        <div className="plus"></div>
                        <div className="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>              
            <div className="grid-item ">
                <div className="gallery-image">
                    <img src={images.port2}alt="" />
                    <div className="img-overlay">
                        <div className="plus"></div>
                        <div className="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>              
            <div className="grid-item ">
                <div className="gallery-image">
                    <img src={images.port3}alt="" />
                    <div className="img-overlay">
                        <div className="plus"></div>
                        <div className="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>              
            <div className="grid-item ">
                <div className="gallery-image">
                    <img src={images.port4}alt="" />
                    <div className="img-overlay">
                        <div className="plus"></div>
                        <div className="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>              
            <div className="grid-item">
                <div className="gallery-image">
                    <img src={images.port5}alt="" />
                    <div className="img-overlay">
                        <div className="plus"></div>
                        <div className="img-description">
                            <h3>Frontend</h3>
                            <h5>View Demo</h5>
                        </div>
                    </div>  
                </div>     
            </div>               */}
                  
            
            
              
                      
             
                      
            </div>
            <div className="more-folio">
              <a href="#" className="btn">More Folio</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Dav