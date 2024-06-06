import React, { useState } from "react";
import { motion as m } from "framer-motion"
import { Link, NavLink } from "react-router-dom";
import GithubSvg from "../components/svg/githubSvg"

export default function Nav() {

  const logoAnimation = {
    hidden: { y: 20 },
    show: { y:0, opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren:3
      }
    },
    exit: { scale: 50 },
  }

  const navbarAnimation = {
    hidden: { },
    show: { transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25
      }
    },
    exit: { 
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25
      }
    },
  }

  const navItemAnim = {
    hidden: { opacity: 0},
    show: { opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren:3
      }
    },
    exit: { },
  }

  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to="/" className="title" onClick={() => setMenuOpen(false) }>
            <m.div variants={ logoAnimation } initial="hidden" animate="show" exit="exit">DAVE DELANEY</m.div>
          </Link>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <m.ul className={menuOpen ? "open" : ""} variants={ navbarAnimation } initial="hidden" animate="show" exit="exit">
          <m.li variants={ navItemAnim }>
            <NavLink className="nav-link" to="about" onClick={() => setMenuOpen(!menuOpen)}>ABOUT</NavLink>
          </m.li>
          <m.li variants={ navItemAnim }>
            <NavLink to="work" onClick={() => setMenuOpen(!menuOpen)}>WORK</NavLink>
          </m.li>
          {/* <m.li variants={ navItemAnim }>
            <NavLink to="contact" onClick={() => setMenuOpen(!menuOpen)}>CONTACT</NavLink>
          </m.li> */}
          <m.li variants={ navItemAnim }>
            <div className="githubLink"><Link to="https://github.com/dmny" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(!menuOpen)}><GithubSvg /></Link></div>
          </m.li>
        </m.ul>
      </nav>
    </header>
  );
};