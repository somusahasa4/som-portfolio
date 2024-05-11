import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Sitenav.scss';

function Sitenav() {
  return (
    <header className="header">
        <Navbar className="navbar-expand-lg">
          <Container className="justify-content-between">
            <Navbar.Brand href="#home">Somasundaram</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Work Experience</Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Project2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Project3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Project4
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  );
}

export default Sitenav;