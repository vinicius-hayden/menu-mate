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

  async function getPreparingOrders(): Promise<Order[]> {
    const response = await fetch(`${urlBase}/orders?status=preparing`);
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

  async function updateOrderStatus(orderId: number, newStatus: string) {
    try {
      const response = await fetch(`${urlBase}/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({status: newStatus}),
      });

      if (response.ok) {
        const updatedOrder = await response.json();
        setOrders((prevOrders) => 
          prevOrders.map((order) => 
            order.id === updatedOrder.id ? updatedOrder : order
          )
        );
        return updatedOrder
      } else {
        throw new Error('Failed to update order status');
      }

    } catch (error) {
      console.error(error);
      throw error;
    }
  } 


  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  return {
    orders,
    getPendingOrders,
    getPreparingOrders,
    getReadyOrders,
    getPickedUpOrders,
    updateOrderStatus
  }

}