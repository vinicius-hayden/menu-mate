'use client';

import { useEffect, useState } from "react";
import useOrders from "@/data/hooks/useOrders";
import { Order } from "@menumate/core";

export default function OrderStatusScreen() {
  const { getPrepairingOrders, getReadyOrders } = useOrders();

  const [preparingOrders, setPreparingOrders] = useState<Order[]>([]);
  const [readyOrders, setReadyOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const preparing = await getPrepairingOrders();
        const ready = await getReadyOrders();
        setPreparingOrders(preparing);
        setReadyOrders(ready);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [getPrepairingOrders, getReadyOrders]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Order Status</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Preparing
          </h2>
          <div className="flex gap-4 overflow-x-auto">
            {preparingOrders.map((order) => (
              <div
                key={order.id}
                className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg shadow-lg text-center min-w-[200px]"
              >
                <h3 className="text-lg font-bold text-yellow-800">
                  Order #{order.id}
                </h3>
                <p className="text-sm text-yellow-700 mt-2">
                  Total: ${order.totalPrice.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Ready
          </h2>
          <div className="flex gap-4 overflow-x-auto">
            {readyOrders.map((order) => (
              <div
                key={order.id}
                className="bg-green-100 border border-green-300 p-4 rounded-lg shadow-lg text-center min-w-[200px]"
              >
                <h3 className="text-lg font-bold text-green-800">
                  Order #{order.id}
                </h3>
                <p className="text-sm text-green-700 mt-2">
                  Total: ${order.totalPrice.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
