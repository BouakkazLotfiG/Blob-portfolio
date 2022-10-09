import React from 'react'
import "./Records.css"
import { images } from '../../constants'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Records = () => {
  return (
    <section className="records ">
      <div className="custom-shape-divider-top-1665218615">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
      <div className="custom-shape-divider-bottom-1665218673">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Records