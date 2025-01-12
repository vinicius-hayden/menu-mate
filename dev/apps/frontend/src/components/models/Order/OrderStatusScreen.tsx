'use client';

import { useEffect, useState } from "react";
import useOrders from "@/data/hooks/useOrders";
import io from 'socket.io-client';
import { Order } from "@menumate/core";

const socket = io('http://localhost:3000'); // URL API

export default function OrderStatusScreen() {
  const { getPreparingOrders, getReadyOrders } = useOrders();

  const [preparingOrders, setPreparingOrders] = useState<Order[]>([]);
  const [readyOrders, setReadyOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const preparing = await getPreparingOrders();
        const ready = await getReadyOrders();
        setPreparingOrders(preparing);
        setReadyOrders(ready); 
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders()

    socket.on('orderStatusUpdated', (order: Order) => {    
      if (order.status == 'preparing') {
        setPreparingOrders((prevPreparingOrders) => [...prevPreparingOrders, order]);
      }
    
      if (order.status == 'ready') {
        setReadyOrders((prevReadyOrders) => [...prevReadyOrders, order]);
        setPreparingOrders((prevPreparingOrders) => (prevPreparingOrders.filter((item) => (item.id != order.id))));
      }

      if (order.status == 'pickedUp') {
        setReadyOrders((prevReadyOrders) => {
          return prevReadyOrders.filter((item) => (item.id != order.id));
        })
      }
    });
    
    return () => {
      socket.off('orderStatusUpdated');
    };

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Order Status</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            In Progress
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {preparingOrders.map((order) => (
              <div
                key={order.id}
                className="bg-yellow-200 border border-yellow-300 p-4 rounded-lg text-center"
              >
                <h3 className="text-6xl font-bold text-yellow-800">
                  #{order.id}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Now Serving
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {readyOrders.map((order) => (
              <div
                key={order.id}
                className="bg-green-300 border border-green-300 p-4 rounded-lg text-center"
              >
                <h3 className="text-6xl font-bold text-green-900">
                  #{order.id}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
