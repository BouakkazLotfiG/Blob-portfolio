import React from "react";
import "./Dev.scss";
import projects from "../../Data";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AiFillEye, AiFillCode } from "react-icons/ai";
import Popup from "../../constants/Popup";
import CardPopup from "./CardPopup";

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

  const filterWorks = (filteredData, triggeredWork) => {
    const filteredWork = filteredData.filter(
      (work) => work.id === triggeredWork
    );
    // console.log(filteredWork);
    return filteredWork;
  };

  return (
    <section className="portfolio section" id="portfolio">
      <div class="custom-shape-divider-top-1665218431">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="background-bg">
        <div className="overlay overlay-sm">
          <img src={images.halfcircle} className="shape half-circle1" alt="" />
          <img src={images.halfcircle} className="shape half-circle2" alt="" />
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
          {["All", "React", "Angular"].map((item, index) => (
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
                <img src={work.logo} alt={work.name} />

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
                <h3
                  className="bold-text"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  {work.name}
                </h3>

                <button
                  className="btn"
                  ordre={index}
                  onClick={(ev) => {
                    setTriggeredWork(`${work.id}`);
                    setButtonPopup(true);
                  }}
                >
                  read more
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <CardPopup work={filterWorks(works, triggeredWork)} />
      </Popup>
      <div className="wave-buttom-portfolio">
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
};

export default Dev;
