import { Order } from "@menumate/core";
import OrderItemPage from "./OrderItem";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import useOrders from "@/data/hooks/useOrders";
import Swal from 'sweetalert2'

export interface OrderPreparingProductProps {
  order: Order;
}

export default function OrderPreparingProduct(props: OrderPreparingProductProps) {
  const { order } = props;
  const { updateOrderStatus } = useOrders();

  const handleStatusChange = async (e: any) => {
    e.preventDefault();
    try {
      await updateOrderStatus(props.order.id, "ready");

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Order status updated to ready.',
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
     <h1 className="text-xxl font-bold text-black">#{order.id}</h1>

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
          Confirm Product Readiness
        </Button>
      </div>
    </Card>
  );
}
