import { useState } from "react";
import { motion as m } from "framer-motion"

export default function BannerCard (props) {

    const [iframeSrc, setIframeSrc] = useState(props.imgUrl);
    const [buttonText, setButtonText] = useState("PLAY");
    const [key, setKey] = useState(null);
    const loadIframe = () => {
        setKey(Math.random());
        setIframeSrc( props.pageUrl );
        setButtonText( "REPLAY" );
      };
    const bannerAnim = {
        hidden: { y: 50, opacity: 0 },
        show: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 }
    };

    return (

    <m.div className="work-card" variants={ bannerAnim } initial="hidden" animate="show" exit="exit">
        <iframe key={key} height="250" width="300" scrolling="no" src={ iframeSrc }></iframe>
        <div className="work-info">
            <h3>{props.client}</h3>
            <p>sdfjkhskdjhfsd</p>
            <button className="btn" type="button" onClick={ loadIframe }>{ buttonText }</button>
        </div>
    </m.div>

    )
}