"use client";

import { Navbar, Nav, Container } from "react-bootstrap";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#76a5af" }} expand="lg">
        <Container>
          <Logo />
          <Navbar.Brand href="#home" className="text-white">
            MenuMate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://youtube.com" target="_blank">
                <IconBrandYoutube size={28} stroke={1} color="white" />
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank">
                <IconBrandInstagram size={28} stroke={1} color="white" />
              </Nav.Link>
              <Nav.Link href="https://facebook.com" target="_blank">
                <IconBrandFacebook size={28} stroke={1} color="white" />
              </Nav.Link>
              <Nav.Link href="https://linkedin.com" target="_blank">
                <IconBrandLinkedin size={28} stroke={1} color="white" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
