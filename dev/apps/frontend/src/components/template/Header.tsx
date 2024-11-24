"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../shared/Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useCategories from "@/data/hooks/useCategories";
import ShoppingCart from "../shared/ShoppingCartIcon";
import "./Header.css";
import useShoppingCart from "@/data/hooks/useShoppingCart";
import Link from "next/link";

export default function Header() {
  const [currentHref, setCurrentHref] = useState<string>("/menu");
  const [nextPageName, setNextPageName] = useState<string>("All Products");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const expand = false;
  const pathname = usePathname();
  const { categories } = useCategories();
  const { qtyItems } = useShoppingCart();

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
          <Link href={"/checkout/cart"} className="cart-collapsed ml-28">
                  <ShoppingCart qtyItems={qtyItems} />
                </Link>
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
                <Link href={"/checkout/cart"} className="cart-expanded">
                  <ShoppingCart qtyItems={qtyItems}/>
                </Link>
                <Nav.Link href="/" className="text-white text-xl">
                  Home
                </Nav.Link>
                <Nav.Link href={currentHref} className="text-white text-xl">
                  {nextPageName}
                </Nav.Link>
                {isSidebarOpen
                  ? categories.map((category) => (
                      <Nav.Link
                        href={`/category/${category.id}`}
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
