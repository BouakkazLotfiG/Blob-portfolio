import { useState, useRef, useEffect } from "react";
import "./About.css";
import { images } from "../../constants";
import { motion } from "framer-motion";

const skills = [
  images.css,
  images.git,
  images.graphql,
  images.html,
  images.javascript,
  images.mu5,
  images.node,
  images.python,
  images.react,
  images.redux,
  images.sass,
  images.tailwind,
  images.typescript,
];

const About = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="Who Am I">
            About me
          </h3>
        </div>

        <div className="section-body grid-2">
          <div className="column-1">
            <h3 className="title-sm">Hello, I'm</h3>
            <p className="text">
              Bouakkaz Lotfi, I’m 24 years old, I graduated from University
              (USTHB) with a bachelor's in Computer Science and a master's
              degree in Visual Computing.
              <br />I chose Web development because I’ve always been interested
              in bringing beautiful UI designs to life, in a well coded and
              responsive way.
            </p>
            <div className="skills">
              <motion.div
                whileTap={{ cursor: "grabbing" }}
                ref={carousel}
                className="carousel"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="inner-carousel"
                >
                  {skills.map((image, index) => {
                    return (
                      <motion.div key={index} className="image-item">
                        <img src={image} alt={image} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>

            <a href="#" className="btn">
              Read more
            </a>
          </div>

          <div className="column-2 image">
            <motion.div
              animate={{ x: [-100, 0] }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <img src={images.person} className="z-index" alt="" />
            </motion.div>
            <img src={images.points4} className="points" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
