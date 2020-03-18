import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { Nav } from 'react-bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'George Garcia',

      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],

      home: {
        title: '"There is no learning without Struggle"',
        subTitle: 'Hungry to build iOS Apps constantly',
        text: 'Take a look at the projects I have worked on below!'
      },

      about: {
        title: 'About myself...'
      },

      contact: {
        title: 'Let\'s talk!'
      }
   }
}

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>George Garcia</Navbar.Brand>

            <Navbar.Toggle className="bordder-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


        </Container>
      </Router>
    );
    }
}

export default App;
