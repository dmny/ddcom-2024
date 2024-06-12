import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion as m } from 'framer-motion'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'

function App() {

  const location = useLocation();

  return (
  
    <div className="App">
      {location.pathname !== "/" ? <Navbar/> : null}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </AnimatePresence>
      {location.pathname !== "/" ? <Footer/> : null}
    </div>
  )
};

export default App