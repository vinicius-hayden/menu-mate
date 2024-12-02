import { Order } from "@menumate/core";
import OrderItemPage from "./OrderItem";

export interface OrdersProps {
  order: Order;
}

function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export default function Orders(props: OrdersProps) {
  const { order } = props;

  return (
    <div
      key={order.id}
      className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
    >
      <div className="mb-4 text-center">
        <h1 className="text-xl font-bold text-gray-800">
          {capitalizeFirstLetter(order.status)}
        </h1>
      </div>

      <div className="mb-6 text-center">
        <h2 className="text-lg font-semibold text-gray-600">
          Total: ${order.totalPrice.toFixed(2)}
        </h2>
      </div>

      <div className="space-y-4">
        {order.orderItems.map((orderItem) => (
          <OrderItemPage key={orderItem.id} orderItem={orderItem} />
        ))}
      </div>
    </div>
  );
}
