import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion"

export default function Home() {  

  const headerItem = {
    hidden: { y: 40 },
    show: { y: 0,
      transition: {
        duration: 0.25,
        delay: 1
      }
    },
    exit: { y: 40 }
  };

  const centerItem = {
    hidden: { opacity:0 },
    show: { opacity:1,
      transition: {
        duration: 1
      }
    },
    exit: { opacity:0 }
  };

  const buttonItem = {
    hidden: { y: -50 },
    show: { y: 0,
      transition: {
        duration: 0.25,
        delay: 1
      }
    },
    exit: { y: -50 }
  };

  const listItem = {
    hidden: { y: -10, opacity: 0 },
    show: {  y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
  };


  return (
    <div className="homeContainer">
      <div className="homeCopy" aria-hidden="true">
            <div className="home">
              <div className="header-mask">
                <m.h2 variants={ headerItem } initial="hidden" animate="show" exit="exit">DAVE DELANEY</m.h2>
              </div>
            </div>
            <div className="home">
              <m.h1 variants={ centerItem } initial="hidden" animate="show" exit="exit">FRONT-END DEVELOPER</m.h1>
            </div>
            <div className="home">
            <div className="header-mask">
              <m.div variants={ buttonItem } initial="hidden" animate="show" exit="exit">
                <Link to="/about">
                  <button className="btn" role="button">LEARN MORE</button>
                </Link>
              </m.div>
            </div>
          </div>
        </div>
    </div>
  )
}
