export default interface orderItem {
  id: number;
  orderId: number;
  productId: number;
  price: number;
  quantity: number;
  totalPrice?: number;
}