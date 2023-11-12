import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap"


const SiteNav  = ({props}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
       <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/sos-logo.png"
                height={75}
                quality={95}
                alt="Site Logo"
              />
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="ms-auto px-5">
              <NavDropdown title="Publications" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Master Thesis
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Essays</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Alumni</Nav.Link>
              <Nav.Link href="#link">New Students</Nav.Link>
            </Nav>
          </Navbar.Collapse>
       </Container>
    </Navbar>
  )
}

export default SiteNav