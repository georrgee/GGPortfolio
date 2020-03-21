import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function Homepage(props) {

    return (
        <div>
            <Hero title= {props.title} subTitle= {props.subTitle} text= {props.text} />
            <Carousel />
        </div>
    );
}

export default Homepage;

// If you used angular before, this is actually when you create a new component to the CLI
// It auto populates the component's content to say "this home page" or whatever the component is called, works