import React from 'react'
import "./About.css"
import { images } from '../../constants'

const About = () => {
  return (
    <section class="about section" id="about">
        <div class="container">
          <div class="section-header">
            <h3 class="title" data-title="Who Am I">About me</h3>
          </div>

          <div class="section-body grid-2">
            <div class="column-1">
              <h3 class="title-sm">Hello, I'm</h3>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium distinctio doloribus quam? Ut, laudantium a dolore,
                minima repudiandae iure iste molestiae exercitationem earum
                neque tempora?
              </p>
              <div class="skills">
                <div class="skill html">
                  <h3 class="skill-title">HTML</h3>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="90%"></div>
                  </div>
                </div>
                <div class="skill css">
                  <h3 class="skill-title">CSS</h3>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="70%"></div>
                  </div>
                </div>
                <div class="skill js">
                  <h3 class="skill-title">JavaScript</h3>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="80%"></div>
                  </div>
                </div>
              </div>
              <a href="#" class="btn">Read more</a>
            </div>

            <div class="column-2 image">
              <img src={images.points4} class="points" alt="" />
              <img src={images.about} class="z-index" alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default About