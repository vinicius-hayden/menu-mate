"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

import { Product } from "@menumate/core";
import "./ProductInformation.css";
import ProductCard from "./ProductCard";
import useShoppingCart from "@/data/hooks/useShoppingCart";

export interface ProductInformationProps {
  product: Product;
}

export default function ProductInformation(props: ProductInformationProps) {
  const [show, setShow] = useState(false);
  const { product } = props;
  const { addItem } = useShoppingCart();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ProductCard product={product} onClick={handleShow} />
      <br />

      <Modal show={show} onHide={handleClose} className="mt-20">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image src={product.image} alt="Product Image" />
          <h1>{product.name}</h1>
          <h2 className="text-gray-500">${product.price}</h2>
          <p>{product.description}</p>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            variant="secondary"
            size="lg"
            className="modal-footer-btn"
            onClick={(e) => {
              e.preventDefault();
              console.log("Add to Order button clicked!"); 
              addItem(props.product);
            }}
          >
            Add 1 to Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
