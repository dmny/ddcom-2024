import { motion as m } from "framer-motion"

export default function techCard (props) {
    
    const Image = props.properties.imageFile;

    return (
        <m.div className="current-parent" variants={props.animation}>
            <div className="current-sibling">
                <Image />
            </div>
            <span>{ props.properties.label }</span>
        </m.div>
    )
}