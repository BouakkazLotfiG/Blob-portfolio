import React from 'react'
import "./Dev.css"
import "./Dev.scss"
import projects from "../../Data"
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants'


const Dev = () => {
    const [works, setWorks] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [filterWork, setFilterWork] = useState([]);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        setFilterWork(projects.projects)
    }, []);

    useEffect(() => {
        setWorks(projects.projects)
    }, []);

    const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tag.includes(item)));
      }
    }, 500);
  };

    console.log(filterWork)
    
  return (
     <section class="portfolio section" id="portfolio">
        <div class="background-bg">
          <div class="overlay overlay-sm">
            <img
              src={images.halfcircle}
              class="shape half-circle1"
              alt=""
            />
            <img
              src={images.halfcircle}
              class="shape half-circle2"
              alt=""
            />
            <img src={images.square} class="shape square" alt="" />
            <img src={images.wave} class="shape wave" alt="" />
            <img src={images.circle} class="shape circle" alt="" />
            <img
              src={images.triangle}
              class="shape triangle"
              alt=""
            />
            <img src={images.x} class="shape xshape" alt="" />
          </div>
        </div>

        <div class="container">
          <div class="section-header">
            <h3 class="title" data-title="My works">Portfolio</h3>
          </div>

          

        <div className="app__work-filter">
            {[ 'All', 'Full stack', 'Frontend'].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
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
                        <div className="app__work-img app__flex" >
                            <img src={work.imgUrl} alt={work.name} />
                
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href={work.projectLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    
                                    </motion.div>
                                </a>
                                <a href={work.codeLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                      
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                ))} 
            </motion.div>
                      
      
            
        </div>
      </section>
  )
}

export default Dev