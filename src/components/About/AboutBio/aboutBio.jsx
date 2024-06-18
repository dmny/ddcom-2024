
import aboutData from "./aboutData"
import { motion as m } from "framer-motion"

const headerItem = {
    hidden: { y: -28 },
    show: { y: 0, transition: { duration: 0.25 }},
    exit: { y: -28 }
  };

  const listItem = {
    hidden: { y: -10, opacity: 0 },
    show: {  y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
  };

const aboutParagraphs = Object.values(aboutData[0]);

export default function AboutBio (props) {
    return (
        <div className="about-text">
            <div className="header-mask">
                <m.h2 variants={headerItem}>{ aboutData[0].header }</m.h2>
            </div>
            <m.h3 variants={listItem}>{ aboutData[0].subHeader }</m.h3>
            { aboutParagraphs.slice(3).map((item,i) => ( <m.p variants={listItem} key={i}>{ item }</m.p> )) }
        </div>
    )
}