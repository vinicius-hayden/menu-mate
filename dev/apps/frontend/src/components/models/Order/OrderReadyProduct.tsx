import { Order } from "@menumate/core";
import OrderItemPage from "./OrderItem";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import useOrders from "@/data/hooks/useOrders";
import Swal from 'sweetalert2'

export interface OrderPendingProductProps {
  order: Order;
}

export default function OrderReadyProduct(props: OrderPendingProductProps) {
  const { order } = props;
  const { updateOrderStatus } = useOrders();

  const handleStatusChange = async (e: any) => {
    e.preventDefault();
    try {
      const updatedOrder = await updateOrderStatus(props.order.id, "pickedUp");
      console.log("Order updated:", updatedOrder);

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Order status updated to pickedUp.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4CAF50'
      }).then(
        function() {
          location.reload();
        }
      );
    } catch (error) {
      console.error("Failed to update order status:", error);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to update order status. Please try again.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#F44336'
      });
    }
  };

  return (
    <Card key={order.id} className="shadow-lg rounded-lg p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">
          ${order.totalPrice}
        </h1>
        <h2 className="text-lg font-medium text-gray-600">
          {order.paymentType}
        </h2>
      </div>

      <div className="space-y-4">
        {order.orderItems.map((orderItem) => (
          <OrderItemPage key={orderItem.id} orderItem={orderItem} />
        ))}
      </div>

      <div className="mt-4">
        <Button
          variant="primary"
          className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          onClick={handleStatusChange}
        >
          Confirm Pick Up
        </Button>
      </div>
    </Card>
  );
}
