import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"
import metroclub from '../assets/metroclub/metroclub.jpg';
import nocturnal from '../assets/nocturnal/nocturnal.jpg';
import bannerData from "../data/bannerData"
import BannerCard from "../components/bannerCard"

export default function Work() {
  
  const SkillVariant = {
    hidden: { x: 30, opacity: 0 },
    show: { x:0, opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren:1
      }
    },
    exit: { x: 30, opacity: 0 }
  }

  const Banners = bannerData.map(banner => <BannerCard key={banner.id} {...banner}/>)

  return (
    <>
      <div className="container">
        <m.div className="websites" initial={{ x:-50, opacity: 0 }} animate={{ x:0, opacity:1 }} exit={{ x:-50, opacity: 0 }} >
          <h2>Websites</h2>
          <img src={metroclub} alt="" />
        </m.div>
        <div className="bannerContainer">
          <m.div className="banners" variants={SkillVariant} initial="hidden" animate="show" exit="exit">
            <div className="work-header">
              <h2>HTML5 Display Ads</h2>
            </div>
            { Banners }
          </m.div>
        </div>
      </div>
    </>
  )
}