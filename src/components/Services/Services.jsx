import React from 'react'
import "./Services.css"
import { images } from '../../constants'

const Services = () => {
  return (
      <section className="services section" id="services">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="What I Do">Services</h3>
            <p className="text">
              Here are the services and technologies i use
            </p>
          </div>

          <div className="cards">
            {/* <div className="card-wrap">
              <img
                src={images.points3}
                className="points points1 points-sq"
                alt=""
              />
              <div className="card" data-card="UI/UX">
                <div className="card-content z-index">
                  <img src={images.designicon} className="icon" alt="" />
                  <h3 className="title-sm">Web Design</h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    est suscipit itaque?
                  </p>
                  <a href="#" className="btn small">Read more</a>
                </div>
              </div>
            </div> */}

            <div className="card-wrap">
              <div className="card" data-card="Code">
                <div className="card-content z-index">
                  <img src={images.codeicon} className="icon" alt="" />
                  <h3 className="title-sm">Front end Development</h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores suscipit nobis dolore?
                  </p>
                  <a href="#portfolio" className="btn small">View Projects</a>
                </div>
              </div>
            </div>

            <div className="card-wrap">
              <img
                src={images.points3}
                className="points points2 points-sq"
                alt=""
              />
              <div className="card" data-card="App">
                <div className="card-content z-index">
                  <img src={images.designicon} className="icon" alt="" />
                  <h3 className="title-sm">Full stack Development</h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum hic veniam nihil.
                  </p>
                  <a href="#portfolio" className="btn small">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services