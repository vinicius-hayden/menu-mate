'use client'
import { Order } from "@menumate/core"
import { useEffect, useState } from "react"

const urlBase = "http://localhost:3000"

export default function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  async function getOrders(): Promise<Order[]> {
    const response = await fetch(`${urlBase}/orders`);
    const orders = await response.json();
    return orders ?? [];
  }

  async function getPendingOrders() : Promise<Order[]> {
    const response = await fetch(`${urlBase}/orders?status=pending`);
    const orders = await response.json(); 
    return orders ?? [];
  }

  async function getPrepairingOrders(): Promise<Order[]> {
    const response = await fetch(`${urlBase}/orders?status=prepairing`);
    const orders = await response.json();
    return orders ?? [];
  }

  async function getReadyOrders(): Promise<Order[]> {
    const response = await fetch(`${urlBase}/orders?status=ready`);
    const orders = await response.json();
    return orders ?? [];
  }

  async function getPickedUpOrders(): Promise<Order[]> {
    const response = await fetch(`${urlBase}/orders?status=pickedup`);
    const orders = await response.json();
    return orders ?? [];
  }

  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  return {
    orders,
    getPendingOrders,
    getPrepairingOrders,
    getReadyOrders,
    getPickedUpOrders
  }

}