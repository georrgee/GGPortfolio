import React from 'react';

import george from '../assets/images/george-portrait.JPG';
import githubImage from '../assets/images/github-logo.PNG';
import quenchLogo from '../assets/images/quench-logo.png';

import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            items: [
                {
                    id: 0,
                    title: 'Something here...',
                    subTitle: 'Github?',
                    imageSource: githubImage,
                    link: 'https://github.com/georrgee',
                    selected: false
                }, 

                {
                    id: 1,
                    title: 'George Garcia',
                    subTitle: 'Instagram?',
                    imageSource: george,
                    link: 'https://instagram.com/gg.captures',
                    selected: false
                },

                {
                    id: 2,
                    title: 'Quench',
                    subTitle: 'Most recent iOS App release',
                    imageSource: quenchLogo,
                    link: 'https://apps.apple.com/us/app/quench-stay-hydrated/id1493860273',
                    selected: false
                }
            ]
        }
    }

    handlecardClick = (id, card) => {

        console.log(id);

        let items          = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return( 
            items.map(item => {
                return <Card item= {item} click= {(event => this.handlecardClick(item.id, event))} key= {item.id} /> 
            })
        );
    }
        render() {
            return (
                <Container fluid= {true}>
                    <Row className= "justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            );
        }
}

export default Carousel;