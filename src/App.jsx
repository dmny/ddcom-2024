import { Route, Routes, Link, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'

// import WorkDetail from './pages/WorkDetail'

function App() {
  const location = useLocation()
  // alert(location);
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/work/:id" element={<WorkDetail/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App