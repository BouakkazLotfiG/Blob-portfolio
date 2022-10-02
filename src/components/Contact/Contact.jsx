import React from 'react'
import "./Contact.css"
import {FaLocationArrow} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <h3 className="title">Get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              rerum odio incidunt doslorum officia dolorem eaque aprim?
            </p>
            <div className="information-wrap">
              <div className="information">
                <div className="contact-icon">
                  <FaLocationArrow />
                </div>
                <p className="info-text">
                  Cité Kaid Ahmed bloc16 N22, Tiaret-Algeria
                </p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <MdEmail />
                </div>
                <p className="info-text">Bouakkaz144.lotfi@gmail.com</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <AiFillPhone />
                </div>
                <p className="info-text">+213 562 29 43 49</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3 className="title">Contact me</h3>
            <div className="row">
              <input
                type="text"
                className="contact-input"
                placeholder="First Name"
              />
              <input
                type="text"
                className="contact-input"
                placeholder="Last Name"
              />
            </div>

            <div className="row">
              <input
                type="text"
                className="contact-input"
                placeholder="Phone"
              />
              <input
                type="email"
                className="contact-input"
                placeholder="Email"
              />
            </div>

            <div className="row">
              <textarea
                name="message"
                className="contact-input textarea"
                placeholder="Message"
              ></textarea>
            </div>
            <a href="/google.com" className="btn">
              Send
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact