import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title= {props.title} />
            <Content>
                <p>Yo! How's it going? </p>
                <p>The name's George and I am a iOS Engineer with experience in Swift! I also have some experience in Java, React, and JSX.</p>
                <p>How did I get into iOS Development? Great question!</p>
            </Content>
        </div>
    );
}

export default AboutPage;