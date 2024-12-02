import { useEffect, useState } from "react";
import { OrderItem } from "@menumate/core";
import { Product } from "@menumate/core";
import useProducts from "@/data/hooks/useProducts";
import OrderProduct from "./OrderProduct";

export interface OrderItemPageProps {
  orderItem: OrderItem;
}

export default function OrderItemPage(props: OrderItemPageProps) {
  const { orderItem } = props;
  const { getProductById } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getProductById(orderItem.productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    }

    fetchProduct();
  }, [orderItem.productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const quantity = orderItem.quantity;

  return (
    <div key={orderItem.id}>
      <OrderProduct product={product} quantity={quantity}/>
      <h1></h1>
    </div>
  );
}
