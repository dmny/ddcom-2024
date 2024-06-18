import { motion as m } from "framer-motion"
import SkillBar from "./skillBar"

export default function SkillsGraph(props) {

  const skillChartVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1},
    exit: { opacity: 0 }
  };

  const animHeader = {
    hidden: { y: -28 },
    show: { y: 0, transition: { duration: 0.25 }},
    exit: { y: -28 }
  };

  const listItem = {
    hidden: { y: -10, opacity: 0 },
    show: {  y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
  };

  // console.log(props.skillsData)

  return (
    <m.div className="skill-chart" variants={ skillChartVariant } initial="hidden" animate="show" exit="exit">
      <div className="header-mask">
        <m.h2 variants={animHeader}>{ props.skillsData.category.toUpperCase() }</m.h2>
      </div>
      <m.ul className="skill-bars" variants={ skillChartVariant }>
      { props.skillsData.content.map((skillsData,i) => ( <SkillBar key={i} animDelay={i} skillsData={skillsData}/> )) }
      
        {/* { props.skillsData.content.map((skills,i) => (
          
        ))} */}
      </m.ul>
      <div className="chart-footer"><span>Beginner</span><span>Expert</span></div>
    </m.div>
  )
}



  // const SkillsData = Object.values(skillsData);
// console.log(props);
  // const category = Object(props.skillsData.category);

  // const skillset = skillsData.filter(skillSet =>
  //   skillSet.discipline === props.discipline
  // );