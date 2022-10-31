import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarx() {
  return (
    <Navbar bg="light" varaint = "dark " sticky = "top"expand="ld">
      <Container>
        <Navbar.Brand href="#home">Natchapak Jingdee 6404062630066</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Navbarx">Home</Nav.Link>
            
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.facebook.com/ball.lavo">facebook</NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/watch?v=y5IiYz0wC3A">Youtube</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/invites/contact/?i=egsiydb9dhfx&utm_content=1itlold">IG</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Root of equations" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Bisection">BisectionMethod</NavDropdown.Item>
              <NavDropdown.Item href="/Falseposition">FalsepositionMethod</NavDropdown.Item>
              <NavDropdown.Item href = "/Onepoint">OnepointIterationMethod</NavDropdown.Item>
              <NavDropdown.Item href = "/NewtonRap">NewtonRaphsonIterationMethod</NavDropdown.Item>
              <NavDropdown.Item href = "/Secant">SecantMethod</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Interpolation"     id="basic-nav-dropdown">
              <NavDropdown.Item href="/Newton">NewtonDivided</NavDropdown.Item>
              <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item>
              <NavDropdown.Item href="/Spine">Spine</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarx;