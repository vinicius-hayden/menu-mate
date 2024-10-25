"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavbarCollapse, NavbarToggle } from "react-bootstrap";
import Logo from "../shared/Logo";
import useCategories from "@/data/hooks/useCategories";
import "./Header.css";

export default function Header() {
  const { categories } = useCategories();

  return (
    <>
      <Navbar style={{ backgroundColor: "#76a5af" }} data-bs-theme="dark">
        <Container className="justify-between">
          <Logo />
          <Navbar.Brand href="#home" className="text-white" id="logo-text">
            MenuMate
          </Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav" className="justify-end">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="text-white">
                All Categories
              </Nav.Link>
              {/* <ul className="flex space-x-4">
                {categories.map((category) => (
                  <li key={category.id} className="text-white">
                    {category.name}
                  </li>
                ))}
              </ul> */}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}
