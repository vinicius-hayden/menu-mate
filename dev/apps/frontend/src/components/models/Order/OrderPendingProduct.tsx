import { Order } from "@menumate/core";
import OrderItemPage from "./OrderItem";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import useOrders from "@/data/hooks/useOrders";
import Swal from "sweetalert2";

export interface OrderPendingProductProps {
  order: Order;
}

export default function OrderPendingProduct(props: OrderPendingProductProps) {
  const { order } = props;
  const { updateOrderStatus } = useOrders();

  const handleStatusChange = async (e: any, status: string) => {
    e.preventDefault();
    try {
      let updatedStatus: string = "";

      if (status === "confirm") {
        updatedStatus = "preparing";
      } else if (status === "cancel") {
        updatedStatus = "cancelled";
      } else {
        throw new Error("Invalid status value");
      }

      await updateOrderStatus(
        props.order.id,
        updatedStatus,
      );

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Order status updated",
        confirmButtonText: "OK",
        confirmButtonColor: "#4CAF50",
      }).then(function () {
        location.reload();
      });
    } catch (error) {
      console.error("Failed to update order status:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to update order status. Please try again.",
        confirmButtonText: "OK",
        confirmButtonColor: "#F44336",
      });
    }
  };

  return (
    <Card key={order.id} className="shadow-lg rounded-lg p-6 bg-white">
      <h1 className="text-xxl font-bold text-black">#{order.id}</h1>
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
          variant="danger"
          className="w-full py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg"
          onClick={(e) => handleStatusChange(e, "cancel")}
        >
          Cancel Payment
        </Button>
        <Button
          variant="primary"
          className="w-full py-2 mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          onClick={(e) => handleStatusChange(e, "confirm")}
        >
          Confirm Payment
        </Button>
      </div>
    </Card>
  );
}
