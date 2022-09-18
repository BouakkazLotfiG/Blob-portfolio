import React from 'react'
import "./Records.css"
import { images } from '../../constants'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Records = () => {
  return (
    <section class="records">
        <div class="overlay overlay-sm">
          <img src={images.square} alt="" class="shape square1" />
          <img src={images.square} alt="" class="shape square2" />
          <img src={images.circle} alt="" class="shape circle" />
          <img
            src={images.halfcircle}
            alt=""
            class="shape half-circle"
          />
          <img src={images.wave} alt="" class="shape wave wave1" />
          <img src={images.wave} alt="" class="shape wave wave2" />
          <img src={images.x} alt="" class="shape xshape" />
          <img src={images.triangle} alt="" class="shape triangle" />
        </div>

        <div class="container">
          <div class="wrap">
            <div class="record-circle">
            <h2 class="number" >
              <CountUp end={100} redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
             </CountUp>
              </h2>
              <h4 class="sub-title">Projects</h4>
            </div>
          </div>

          <div class="wrap">
            <div class="record-circle active">
            <h2 class="number" data-num="174">
              <CountUp end={100} redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
             </CountUp>
              </h2>
              <h4 class="sub-title">Happy Clients</h4>
            </div>
          </div>

          <div class="wrap">
            <div class="record-circle">
            <h2 class="number" data-num="892">
              <CountUp end={100} redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
             </CountUp>
              </h2>
              <h4 class="sub-title">Work Hour</h4>
            </div>
          </div>

          
        </div>
      </section>
  )
}

export default Records