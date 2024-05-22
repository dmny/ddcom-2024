import React, { useState } from "react";
import { motion as m } from "framer-motion"
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation()
    if(location.pathname === '/') {
    return null
  }
  
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to="/" className="title" onClick={() => setMenuOpen(false)}>
            <m.div initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 50 }} transition={{ duration: 1, type: "spring" }}>DAVE DELANEY</m.div>
          </Link>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="about" onClick={() => setMenuOpen(!menuOpen)}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="work" onClick={() => setMenuOpen(!menuOpen)}>WORK</NavLink>
          </li>
          <li>
            <NavLink to="contact" onClick={() => setMenuOpen(!menuOpen)}>CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};