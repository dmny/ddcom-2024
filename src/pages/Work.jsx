import React from 'react';
import { motion as m } from "framer-motion"
import bannerData from "../data/bannerData";
import websiteData from "../data/websiteData";
import BannerCard from "../components/bannerCard";
import WebsiteCard from "../components/websiteCard";

export default function Work() {

  const workVariant = {
    hidden: { opacity: 1 },
    show: {  opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 5,
        delayChildren:1
      }
    },
    exit: { opacity: 1 }
  };
  
  const headerItem = {
    hidden: { y: -28 },
    show: { y: 0,
      transition: {
        duration: 0.25
      }
    },
    exit: { y: -28 }
  };
  

  return (
      <div className="container">
        <div className="website-container">
          <m.div className="banners" variants={workVariant} initial="hidden" animate="show" exit="exit">
            <div className="work-header">
              <div className="header-mask">
                <m.h2 variants={headerItem} initial="hidden" animate="show" exit="exit">WEBSITES</m.h2>
              </div>
            </div>
            { websiteData.map(website => <WebsiteCard key={website.id} {...website}/>) }
          </m.div>
        </div>
        <div className="banner-container">
          <m.div className="banners" variants={workVariant}>
            <div className="work-header">
              <div className="header-mask">
                <m.h2 variants={headerItem} initial="hidden" animate="show" exit="exit">GSAP DISPLAY ADS</m.h2>
              </div>
            </div>
            { bannerData.map(banner => <BannerCard key={banner.id} {...banner}/>) }
          </m.div>
        </div>
      </div>
  )
}