import React from 'react'
import "./Services.css"
import { images } from '../../constants'

const Services = () => {
  return (
      <section class="services section" id="services">
        <div class="container">
          <div class="section-header">
            <h3 class="title" data-title="What I Do">Services</h3>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              vero?
            </p>
          </div>

          <div class="cards">
            <div class="card-wrap">
              <img
                src={images.points3}
                class="points points1 points-sq"
                alt=""
              />
              <div class="card" data-card="UI/UX">
                <div class="card-content z-index">
                  <img src={images.designicon} class="icon" alt="" />
                  <h3 class="title-sm">Web Design</h3>
                  <p class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    est suscipit itaque?
                  </p>
                  <a href="#" class="btn small">Read more</a>
                </div>
              </div>
            </div>

            <div class="card-wrap">
              <div class="card" data-card="Code">
                <div class="card-content z-index">
                  <img src={images.codeicon} class="icon" alt="" />
                  <h3 class="title-sm">Web Development</h3>
                  <p class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores suscipit nobis dolore?
                  </p>
                  <a href="#" class="btn small">Read more</a>
                </div>
              </div>
            </div>

            <div class="card-wrap">
              <img
                src={images.points3}
                class="points points2 points-sq"
                alt=""
              />
              <div class="card" data-card="App">
                <div class="card-content z-index">
                  <img src={images.appicon} class="icon" alt="" />
                  <h3 class="title-sm">App Development</h3>
                  <p class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum hic veniam nihil.
                  </p>
                  <a href="#" class="btn small">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services