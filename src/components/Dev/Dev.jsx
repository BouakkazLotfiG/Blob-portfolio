import React from 'react'
import "./Dev.css"
import "./Dev.scss"
import projects from "../../Data"
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants'
import {AiFillEye, AiFillCode } from "react-icons/ai"
import Popup from "../../constants/Popup";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Dev = () => {
  const [works, setWorks] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [triggeredWork, setTriggeredWork] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setFilterWork(projects.projects);
  }, []);

  useEffect(() => {
    setWorks(projects.projects);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tag.includes(item)));
      }
    }, 500);
  };

  // console.log(typeof triggeredWork);

  console.log(buttonPopup);
  // console.log(triggeredWork);
  // console.log(works[triggeredWork]);

  return (
    <>
      <section className="portfolio section" id="portfolio">
        <div className="background-bg">
          <div className="overlay overlay-sm">
            <img
              src={images.halfcircle}
              className="shape half-circle1"
              alt=""
            />
            <img
              src={images.halfcircle}
              className="shape half-circle2"
              alt=""
            />
            <img src={images.square} className="shape square" alt="" />
            <img src={images.wave} className="shape wave" alt="" />
            <img src={images.circle} className="shape circle" alt="" />
            <img src={images.triangle} className="shape triangle" alt="" />
            <img src={images.x} className="shape xshape" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="My works">
              Portfolio
            </h3>
          </div>

          <div className="app__work-filter">
            {["All", "Full stack", "Frontend"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            {filterWork.map((work, index) => (
              <div className="app__work-item app__flex" key={index}>
                <div className="app__work-img app__flex">
                  <img src={work.imgUrl} alt={work.name} />

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover app__flex"
                  >
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillCode />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>

                <div className="app__work-content app__flex">
                  <h3 className="bold-text" style={{ marginTop: 10 }}>
                    {work.name}
                  </h3>
                  {/* <p className="p-text" style={{ marginTop: 10 }}>{work.desc}</p> */}

                  {/* <a
                  href={`/${work.name}`}
                  className="btn"
                  style={{ marginTop: 10 }}
                >
                  Read more
                </a> */}
                  <button
                    onClick={() => {
                      setTriggeredWork(`${work.id}`);
                      setButtonPopup(true);
                      // console.log("work\n ", work);
                      // console.log(typeof triggeredWork);
                      console.log("triggeredwork \n", triggeredWork);
                    }}
                  >
                    read more
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        {
          <>
            <h1>{works[triggeredWork].name}</h1>
            <p>{works[triggeredWork].desc}</p>
            <img src={works[triggeredWork].imgUrl} alt="" />
            <a href={works[triggeredWork].codeLink}>
              <FaGithub />
            </a>
            <a href={works[triggeredWork].projectLink}>
              <AiFillEye />
            </a>
          </>
        }
      </Popup>
    </>
  );
};

export default Dev