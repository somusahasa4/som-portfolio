import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Sitenav.scss';

function Sitenav() {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
           {/*<Navbar.Brand href="#home">Somasundaram</Navbar.Brand>*/}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#workexp">Work Experience</Nav.Link>

              <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#project1">Project1</NavDropdown.Item>
                <NavDropdown.Item href="#project2">
                  Project2
                </NavDropdown.Item>
                <NavDropdown.Item href="#project3">Project3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#project4">
                  Project4
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contactme">Contact me</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
}

export default Sitenav;