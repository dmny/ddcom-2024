import { motion as m } from "framer-motion"
import { Link } from 'react-router-dom';

export default function Home() {  

  return (
    <>
    <div className="homeContainer">
      <div className="homeCopy" aria-hidden="true">
            <div className="home">
              <m.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.15, type: "spring", stiffness: 60, delay: 0.25 }}
              >DAVE DELANEY</m.h2>
            </div>
            <div className="home">
              <m.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.15, type: "spring", stiffness: 60, delay: 0.35 }}
              >FRONT-END DEVELOPER</m.h1>
            </div>
            <div className="home">
              <Link to="/about">
                <m.button
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.05, type: "spring", stiffness: 60, delay: 0.45 }}
                  class="btn" role="button"
                  >Learn about Dave</m.button>
                </Link>
              </div>
           </div>
    </div>
    </>
  )
}
