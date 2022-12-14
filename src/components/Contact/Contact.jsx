import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_joh96rl",
        "template_ukhgvqj",
        formRef.current,
        "VSVv7AdDfHXVEAeYd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div data-aos="fade-up" className="contact-box">
          <div className="contact-info">
            <h3 className="title">Get in touch</h3>
            <p className="text">
              Got a question or proposal, or just want to say hello? Go ahead.
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

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <h3 className="title">Contact me</h3>
            <div className="row">
              <input
                type="text"
                className="contact-input"
                placeholder="First Name"
                name="user_first_name"
              />
              <input
                type="text"
                className="contact-input"
                placeholder="Last Name"
                name="user_last_name"
              />
            </div>

            <div className="row">
              <input
                type="text"
                className="contact-input"
                placeholder="Phone"
                name="user_phone"
              />
              <input
                type="email"
                className="contact-input"
                placeholder="Email"
                name="user_email"
              />
            </div>

            <div className="row">
              <textarea
                name="message"
                className="contact-input textarea"
                placeholder="Message"
                rows="5"
              />
            </div>
            <button href="/google.com" className="btn">
              Send
            </button>
            {done && refreshPage()}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
