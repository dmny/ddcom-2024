import { motion as m } from "framer-motion"
import techData from "./techData"
import TechCard from "./techCard";

const headerItem = {
    hidden: { y: -28 },
    show: { y: 0, transition: { duration: 0.25 }},
    exit: { y: -28 }
};

const listItem = {
    hidden: { y: -10, opacity: 0 },
    show: {  y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
};

const TechData = Object.values(techData);

export default function techCard (props) {

    return (
        <div className="focus">
            <div className="header-mask">
                <m.h2 variants={headerItem}>{ TechData[0].toUpperCase() }</m.h2>
            </div>
            { TechData[1].map((items,i) => ( <TechCard key={i} animation={listItem} properties={items}/> )) }
        </div>
    )
}