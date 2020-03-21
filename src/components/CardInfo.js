import React from 'react';
import { useSpring, animated } from 'react-spring';
function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className= "gg-card-info" style= {style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-subTitle">{props.subTitle}</p>
            <a href= {props.link} target=" blank" rel="noopener noreferrer">View</a>
        </animated.div>

    );
}

export default CardInfo;