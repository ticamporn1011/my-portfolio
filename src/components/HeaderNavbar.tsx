import { Navbar, Nav, Container } from 'react-bootstrap';

import { Link } from 'react-scroll';

const HeaderNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="p-0">
        <Navbar.Brand href="/" className="fs-2">
          Ticamporn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="fs-4 justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="about" smooth={true} offset={-120} duration={700}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="portfolio" smooth={true} offset={-70} duration={700}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="skill" smooth={true} offset={-250} duration={700}>
              Skill
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} offset={-250} duration={700}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
