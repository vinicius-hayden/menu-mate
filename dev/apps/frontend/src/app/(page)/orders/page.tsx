'use client'
import Orders from "@/components/models/Order/ValidatedOrders";
import useOrders from "@/data/hooks/useOrders";

export default function Page() {
  const { orders } = useOrders();

  return (
    <div>
        {orders.map((order) => (
          <Orders key={order.id} order={order}/>
        ))}
    </div>
  )
  
}