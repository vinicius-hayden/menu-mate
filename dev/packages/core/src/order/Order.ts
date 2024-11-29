import orderItem from "./OrderItem";

export default interface Order {
  id: number;
  status: string;
  totalPrice: number,
  subTotal: number;
  serviceFee: number;
  hstTax: number;
  paymentType: string;
  orderItems: orderItem[];
}