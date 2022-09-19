import React from 'react'
import "./Contact.css"

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
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p className="info-text">92 Cherry Drive Unimodale, NY 11553</p>
                </div>

                <div className="information">
                  <div className="contact-icon">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <p className="info-text">lorem@ipsum.com</p>
                </div>

                <div className="information">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <p className="info-text">123-456-789</p>
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
                <input type="text" className="contact-input" placeholder="Phone" />
                <input type="email" className="contact-input" placeholder="Email" />
              </div>

              <div className="row">
                <textarea
                  name="message"
                  className="contact-input textarea"
                  placeholder="Message"
                ></textarea>
              </div>
              <a href="#" className="btn">Send</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact