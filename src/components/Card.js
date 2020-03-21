import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {
    return (
        <div className= "d-inline-block gg-card" onClick={(event) => props.click(props.item)}>
            <img className= "gg-card-image" src= {props.item.imageSource} alt= {props.item.imageSource} />
            {props.item.selected && <CardInfo title= {props.item.title} subTitle= {props.item.subTitle} link={props.item.link}/> }
        </div>
    );
}

export default Card;

// conditionally rendered component: We want to basically say "dont show it, unless this card is selected"