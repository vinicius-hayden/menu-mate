"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavbarCollapse, NavbarToggle } from "react-bootstrap";
import Logo from "../shared/Logo";
import "./Header.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [currentHref, setCurrentHref] = useState<string>("/menu");
  const [nextPageName, setNextPageName] = useState<string>("All Products");
  const pathname = usePathname();

  function defineHrefAndNextPage(): void {    
    if (currentHref != "/" && pathname === "/menu") {
      setCurrentHref("/");
      setNextPageName("All categories");
    }
  }

  defineHrefAndNextPage();

  return (
    <>
      <Navbar style={{ backgroundColor: "#76a5af" }} data-bs-theme="dark">
        <Container className="justify-between">
          <Logo />
          <Navbar.Brand href="/" className="text-white" id="logo-text">
            MenuMate
          </Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav" className="justify-end">
            <Nav className="ml-auto">
              <Nav.Link href={currentHref} className="text-white">
                {nextPageName}
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}
