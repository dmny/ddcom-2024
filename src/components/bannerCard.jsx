import { useState } from "react";

export default function BannerCard (props) {
    // const [ active, setActive ] = useState(false)

    const [iframeSrc, setIframeSrc] = useState(props.imgUrl);
    const loadFrame = () => {
        setIframeSrc(
          props.pageUrl
        );
      };
    return (
    <>
    <div className="bannerCard">
        <iframe height="250" width="300" scrolling="no" src={ iframeSrc }></iframe>
        <div className="bannerInfo">
            {/* <button onClick={() => setActive}>Play</button> */}
            <h3>{props.client}</h3>
            <button className="btn" type="button" onClick={loadFrame}>PLAY</button>
        </div>
    </div>
    </>
    )
}
