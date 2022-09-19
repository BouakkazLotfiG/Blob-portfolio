import React from 'react'
import "./About.css"
import { images } from '../../constants'

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="Who Am I">About me</h3>
          </div>

          <div className="section-body grid-2">
            <div className="column-1">
              <h3 className="title-sm">Hello, I'm</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium distinctio doloribus quam? Ut, laudantium a dolore,
                minima repudiandae iure iste molestiae exercitationem earum
                neque tempora?
              </p>
              <div className="skills">
                <div className="skill html">
                  <h3 className="skill-title">HTML</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="90%"></div>
                  </div>
                </div>
                <div className="skill css">
                  <h3 className="skill-title">CSS</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="70%"></div>
                  </div>
                </div>
                <div className="skill js">
                  <h3 className="skill-title">JavaScript</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="80%"></div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn">Read more</a>
            </div>

            <div className="column-2 image">
              <img src={images.points4} className="points" alt="" />
              <img src={images.about} className="z-index" alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default About