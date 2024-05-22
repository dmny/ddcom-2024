import { motion as m } from "framer-motion"
// import { useInView } from "react-intersection-observer";
import skillsData from "../data/skillsData"

// import JS from "../assets/svgIcons/JavaScript.svg"

export default function SkillsGraph(props) {
  const skillset = skillsData.filter(skillSet =>
    skillSet.discipline === props.discipline
  );

  const SkillChartVariant = {
    hidden: { x: 200, opacity: 0 },
    show: { x:0, opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren:1
      }
    },
    exit: { x: 200, opacity: 0 },
  }
  
  return (
    <div className="skill-chart" variants={SkillChartVariant} initial="hidden" animate="show">
      <h2>{props.discipline}</h2>
      <ul className="skill-bars">
        {skillset.map((skills,i) => (
          <m.li className="barUnit" >
            <m.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.25 }} className="barCopy">
                {/* <img src={skills.icon} alt="" /> */}
                <span>{skills.language}</span>
            </m.div>
            <m.div initial={{ width: 0 }} whileInView={{ width : skills.percentage +'%' }} viewport={{ once: true }} transition={{ duration: 0.25, ease: "easeOut", delay: 0.25 + (i * 0.15) }} className="bar"></m.div>
          </m.li>
        ))}
      </ul>
      <div className="chart-footer"><span>Beginner</span><span>Expert</span></div>
    </div>
  )
}