import useOrders from "@/data/hooks/useOrders";
import { Product } from "@menumate/core";
import { Card } from "react-bootstrap";

export interface OrderProductProps {
  product: Product;
  quantity: number;
}

export default function OrderProduct(props: OrderProductProps) {
  const { product } = props;
  const { updateOrderStatus } = useOrders();

  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
      <Card className="w-full p-4">
        <Card.Body className="space-y-3">
          <Card.Title className="text-xl font-semibold text-gray-800">{product.name}</Card.Title>
          <Card.Text className="text-gray-600">
            Quantity: <span className="font-medium text-gray-900">{props.quantity}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
