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
        <Container className="flex flex-1 justify-end">
          <Logo />
          <div className="social-medias">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
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
          </div>
        </Container>
      </Navbar>
    </>
  );
}
