import { useState } from "react";

export default function BannerCard (props) {


    
    const [iframeSrc, setIframeSrc] = useState(props.imgUrl);
    const loadFrame = () => {
        setIframeSrc(
          props.pageUrl
        );
      };
    return (
    <>
    <div className="bannerCard">
        <canvas id="canvas" width="300" height="250"></canvas>
        <div className="bannerInfo">
            <h3>{props.client}</h3>
            <button className="btn" type="button" onClick={loadFrame}>PLAY</button>
        </div>
    </div>
    </>
    )
}