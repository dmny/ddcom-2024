import { motion as m } from "framer-motion"
import Skills from "../components/About/Skills/skills"
import AboutBio from "../components/About/AboutBio/aboutBio"
import CurrentFocus from "../components/About/CurrentFocus/currentFocus";

const container = {
  hidden: { },
  show: { transition: { staggerChildren: 0.05, /* delayChildren:0.1 */ }},
  exit: { transition: { staggerChildren: 0.05, /* delayChildren:0.5 */ }},
};

export default function About() {
  return (
    <div className="container">
      <m.div className="about" variants={ container } initial="hidden" animate="show" exit="exit">
        <AboutBio />
        <CurrentFocus />
      </m.div>
      <Skills />
    </div>
  )
}