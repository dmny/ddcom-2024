import { motion } from "framer-motion"

export default function SkillsBar(props) {
    // const offset = 
    return (
      <motion.li
      initial={{ x: "-102%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay:1.5}}
      className="bar" style={{ width : props.percentage +'%' }} layout>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay:0.75 }}className="barCopy">{skillsData.icon}<span>{language}</span>
      </motion.div>
      </motion.li>
    )
  }