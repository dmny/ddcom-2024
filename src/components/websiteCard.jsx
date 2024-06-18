import { motion as m } from "framer-motion"
import { Link } from "react-router-dom";

export default function WebsiteCard (props) {

    const bannerAnim = {
        hidden: { y: 50, opacity: 0 },
        show: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 }
    };

    return (
    <m.div className="work-card" variants={ bannerAnim } initial="hidden" animate="show" exit="exit">
        { props.websiteData.pageUrl ? <Link to={ props.websiteData.pageUrl } target="_blank" rel="noopener noreferrer"><img src={ props.websiteData.imgUrl }></img></Link> : <img src={ props.websiteData.imgUrl }></img>}
        <div className="work-info">
            <h3>{ props.websiteData.client }</h3>
            <p className="work-description">{ props.websiteData.description }</p>
            { props.websiteData.pageUrl ? <Link to={ props.websiteData.pageUrl } target="_blank" rel="noopener noreferrer"><button className="btn" type="button">Visit the Site</button></Link> : <p>This website is no longer active.</p>}
        </div>
    </m.div>

    )
}