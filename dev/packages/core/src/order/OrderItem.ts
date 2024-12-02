export default interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  price: number;
  quantity: number;
  totalPrice?: number;
}