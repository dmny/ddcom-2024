import { motion as m } from "framer-motion"
import skillsData from "../data/skillsData"

export default function SkillsGraph(props) {
  
  const skillset = skillsData.filter(skillSet =>
    skillSet.discipline === props.discipline
  );

  const skillHeader = props.discipline.toUpperCase();

  const skillChartVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1},
    exit: { opacity: 0 }
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
  
  return (
    <m.div className="skill-chart" variants={ skillChartVariant } initial="hidden" animate="show" exit="exit">
      <div className="header-mask">
        <m.h2  variants={headerItem} initial="hidden" animate="show" exit="exit">{skillHeader}</m.h2>
      </div>
      <ul className="skill-bars">
        {skillset.map((skills,i) => (
          <m.li key={i} className="barUnit">
            <m.div className="barCopy" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.25 }}>
                <span>{skills.language}</span>
            </m.div>
            <m.div className="bar" initial={{ width: 0 }} whileInView={{ width : skills.percentage + '%' }} viewport={{ once: true }} transition={{ duration: 0.25, ease: "easeOut", delay: 0.25 + (i * 0.15) }}></m.div>
          </m.li>
        ))}
      </ul>
      <div className="chart-footer"><span>Beginner</span><span>Expert</span></div>
    </m.div>
  )
}