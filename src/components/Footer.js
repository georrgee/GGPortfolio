import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {

    return (
        <footer className= "mt-5"> 
            <Container fluid= {true}>
                <Row className= "border-top justify-content-between p-3">
                    <Col className= "p-0 font-weight-bold" md= {3} sm= {12}>
                        iOS Engineer
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Copyright © 2020 - George Garcia. All Rights Reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;
// p-0: help us move it over a little bit...