import React, { useState } from "react";
import { motion as m } from "framer-motion"
import { Link, NavLink } from "react-router-dom";
import GithubSvg from "../components/svg/githubSvg"

export default function Nav() {

  const logoAnimation = {
    hidden: { y: 20 },
    show: { y:0,
      opacity: 1,
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
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false) }>
            <m.div variants={ logoAnimation } initial="hidden" animate="show" exit="exit"><h1>DAVE DELANEY</h1></m.div>
          </Link>
        </div>
        <m.ul className={menuOpen ? "nav-menu open" : "nav-menu"} variants={ navbarAnimation } initial="hidden" animate="show" exit="exit">
          <m.li className="menu-item" variants={ navItemAnim }>
            <NavLink className="nav-link" to="about" onClick={() => setMenuOpen(!menuOpen)}>ABOUT</NavLink>
          </m.li>
          <m.li className="menu-item" variants={ navItemAnim }>
            <NavLink className="nav-link" to="work" onClick={() => setMenuOpen(!menuOpen)}>WORK</NavLink>
          </m.li>
          <m.li variants={ navItemAnim }>
            <div className="githubLink "><Link to="https://github.com/dmny" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(!menuOpen)}><GithubSvg /></Link></div>
          </m.li>
        </m.ul>
        <div className={menuOpen ? "hamburger open" : "hamburger"} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
      </nav>
    </header>
  );
};