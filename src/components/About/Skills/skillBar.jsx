import { motion as m } from "framer-motion"

export default function SkillBar(props) {
    // const offset = 
    console.log(props.animDelay);
    return (
      <m.li className="barUnit">
            <m.div className="barCopy" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.25, ease: "easeOut", delay: 0.25 + (props.animDelay * 0.15) }}>
               <span>{props.skillsData.skill}</span>
            </m.div>
          <m.div className="bar" initial={{ width: 0 }} whileInView={{ width: props.skillsData.percentage + '%' }} viewport={{ once: true }} transition={{ duration: 0.25, ease: "easeOut", delay: 0.25 + (props.animDelay * 0.15) }}></m.div>
        </m.li>
    )
  }