import { Order } from "@menumate/core";
import { useEffect, useState } from "react";
import useOrders from "@/data/hooks/useOrders";
import OrderPrepairingProduct from "./OrderPrepairingProduct";

export default function PrepairingOrders() {
  const { getPrepairingOrders } = useOrders();
  const [pendingOrders, setPendingOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const fetchedPendingOrders = await getPrepairingOrders();
        setPendingOrders(fetchedPendingOrders);
      } catch (error) {
        console.error("Error fetching order", error);
        setPendingOrders([]);
      }
    }
    fetchOrders();
  }, []);

  if (!pendingOrders) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Prepairing Orders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pendingOrders.map((pendingOrder) => (
          <OrderPrepairingProduct key={pendingOrder.id} order={pendingOrder} />
        ))}
      </div>
    </>
  );
}
