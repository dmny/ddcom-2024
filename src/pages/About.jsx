// Components
import SkillsChart from "../components/skillsChart"
import { motion as m } from "framer-motion"

const SkillVariant = {
  hidden: { x: 30, opacity: 0 },
  show: { x:0, opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren:1
    }
  },
  exit: { x: 30, opacity: 0 },
}

export default function Skills() {
  return (
    <div className="container">

      <m.div className="about" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <m.h2>About Dave</m.h2>
        <m.h3>I am a multi-disciplinary front-end developer with over 15 years experience across the digital landscape.</m.h3>
        <p>Over the course of my career I have held the title of Web Designer, Digital Designer & Digital Production Designer. In each of these experiences, code was involved, but not central to the role.</p>
        <p>As my career progressed, I found myself increasingly less excited about the design side of things, and I then decided to focus on development.</p>
      </m.div>

      <m.div className="skill-charts" variants={SkillVariant} initial="hidden" animate="show" exit="exit">
        <SkillsChart discipline={"Languages"} />
        <SkillsChart discipline={"Libraries"} />
        <SkillsChart discipline={"Production"} />
      </m.div>

    </div>
  )
}
  