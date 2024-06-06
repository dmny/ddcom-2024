// Components
import React from 'react';
import { motion as m } from "framer-motion"
import SkillsChart from "../components/skillsChart"
import aboutData from "../data/aboutData"
import ReactSvg from "../components/svg/reactSvg"

const container = {
  hidden: { },
  show: {
  transition: {
    staggerChildren: 0.05,
    // delayChildren:0.1
    }
  },
  exit: { 
    transition: {
      staggerChildren: 0.05,
      // delayChildren:0.5
    }
  },
};

const listItem = {
  hidden: { y: -10, opacity: 0 },
  show: {  y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 }
};

const headerItem = {
  hidden: { y: -28 },
  show: { y: 0,
    transition: {
      duration: 0.25
    }
  },
  exit: { y: -28 }
};

const aboutParagraphs = Object.values(aboutData[0]);

export default function Skills() {
  return (
    <div className="container">
      <m.div className="about" variants={ container } initial="hidden" animate="show" exit="exit">
        <div className="header-mask">
          <m.h2 variants={headerItem}>{ aboutData[0].header }</m.h2>
        </div>
        <m.h3 variants={listItem}>{ aboutData[0].subHeader }</m.h3>
        {aboutParagraphs.slice(3).map((item,i) => (
          <m.p variants={listItem} key={i}>{ item }</m.p>
        ))}


        {/* <div className="header-mask">
          <m.h2 variants={headerItem}>EXCITED ABOUT</m.h2>
        </div>
        <div className="current-container">
        <div className="current"><ReactSvg /></div>
        <div className="current"></div>
        <div className="current"></div>
        <div className="current"></div>
        <div className="current"></div>
        <div className="current"></div>
        <div className="current"></div>
        <div className="current"></div>
      </div> */}
      </m.div>
      <div className="skill-charts">
        <SkillsChart discipline={"Languages"} />
        <SkillsChart discipline={"Libraries"} />
        <SkillsChart discipline={"Production"} />
      </div>
    </div>
  )
}