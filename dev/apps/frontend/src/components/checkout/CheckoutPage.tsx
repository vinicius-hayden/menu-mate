'use client';
import React from "react";
import useShoppingCart from "@/data/hooks/useShoppingCart";

export default function CheckoutPage() {
  const { items, totalPrice, qtyItems } = useShoppingCart();

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Checkout</h1>

      {qtyItems === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {items.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                  border: "1px solid #ccc",
                  padding: "1rem",
                  borderRadius: "5px",
                }}
              >
                <div>
                  <p><strong>{item.product.name}</strong></p>
                  <p>Price: ${item.product.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
            <p><strong>Total Items:</strong> {qtyItems}</p>
            <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}

      <button
        style={{
          marginTop: "2rem",
          padding: "0.8rem 1.2rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("Proceeding to checkout!")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
