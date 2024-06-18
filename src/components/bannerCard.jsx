import { useState } from "react";
import { motion as m } from "framer-motion"

export default function BannerCard (props) {
    const [iframeSrc, setIframeSrc] = useState(props.bannerData.imgUrl);
    const [buttonText, setButtonText] = useState("PLAY");
    const [key, setKey] = useState(null);
    const loadIframe = () => {
        setKey(Math.random());
        setIframeSrc( props.bannerData.pageUrl );
        setButtonText( "REPLAY" );
      };
    return (
        <m.div className="work-card" initial={{ y: 20, opacity: 0 }} exit={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25, ease: "easeOut", delay: 0.25 + (props.animDelay * 0.15) }}>
        {/* <m.div className="work-card" variants={ bannerAnim } initial="hidden" animate="show" exit="exit"> */}
            <iframe key={key} height="250" width="300" scrolling="no" src={ iframeSrc }></iframe>
            <div className="work-info">
                <h3>{props.bannerData.client}</h3>
                <button className="btn" type="button" onClick={ loadIframe }>{ buttonText }</button>
            </div>
        </m.div>
    )
}