"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../shared/Logo";
import "./Header.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useCategories from "@/data/hooks/useCategories";

export default function Header() {
  const [currentHref, setCurrentHref] = useState<string>("/menu");
  const [nextPageName, setNextPageName] = useState<string>("All Products");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // Sidebar open/close state
  const expand = false;
  const pathname = usePathname();
  const { categories } = useCategories();

  function defineHrefAndNextPage(): void {
    if (currentHref !== "/" && pathname === "/menu") {
      setCurrentHref("/");
      setNextPageName("All categories");
    }
  }

  defineHrefAndNextPage();

  function handleSidebarToggle(isOpen: boolean) {
    setIsSidebarOpen(isOpen);
  }

  return (
    <>
      <Navbar style={{ backgroundColor: "#76a5af" }} expand="lg">
        <Container fluid className="justify-between">
          <Logo />
          <Navbar.Brand href="/" className="text-white" id="logo-text">
            MenuMate
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={() => handleSidebarToggle(true)}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            style={{ backgroundColor: "#76a5af" }}
            show={isSidebarOpen}
            onHide={() => handleSidebarToggle(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                className="text-white"
              >
                MenuMate
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/" className="text-white text-xl">
                  Home
                </Nav.Link>
                <Nav.Link href={currentHref} className="text-white text-xl">
                  {nextPageName}
                </Nav.Link>
                {isSidebarOpen
                  ? categories.map((category) => (
                      <Nav.Link
                        href="/some-path"
                        className="text-white"
                        key={category.name}
                      >
                        {category.name}
                      </Nav.Link>
                    ))
                  : null}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
