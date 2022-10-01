import React from 'react'
import "./Records.css"
import { images } from '../../constants'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Records = () => {
  return (
    <section className="records">
      <div className="overlay overlay-sm">
        <img src={images.square} alt="" className="shape square1" />
        <img src={images.square} alt="" className="shape square2" />
        <img src={images.circle} alt="" className="shape circle" />
        <img src={images.halfcircle} alt="" className="shape half-circle" />
        <img src={images.wave} alt="" className="shape wave wave1" />
        <img src={images.wave} alt="" className="shape wave wave2" />
        <img src={images.x} alt="" className="shape xshape" />
        <img src={images.triangle} alt="" className="shape triangle" />
      </div>

      <div className="container">
        <div className="wrap">
          <div className="record-circle">
            <h2 className="number">
              <CountUp end={20} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <h4 className="sub-title">Projects</h4>
          </div>
        </div>

        <div className="wrap">
          <div className="record-circle active">
            <h2 className="number" data-num="174">
              <CountUp end={3} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <h4 className="sub-title">Happy Clients</h4>
          </div>
        </div>

        <div className="wrap">
          <div className="record-circle">
            <h2 className="number" data-num="892">
              <CountUp end={70} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <h4 className="sub-title">Work Hour</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Records