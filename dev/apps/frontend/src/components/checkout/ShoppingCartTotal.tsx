import { IconShoppingCart } from "@tabler/icons-react";
import { Button } from "react-bootstrap";

export interface ShoppingCartTotalProps {
  qtyItems: number;
  totalPrice: number;
}

const serviceFee : number = 4.99;
let taxesFee;

export default function ShoppingCartTotal(props: ShoppingCartTotalProps) {
  const newTotalPrice = props.totalPrice.toFixed(2);
  taxesFee = (props.totalPrice * 0.13)
  const testVariable = taxesFee.toFixed(2);
  const totalOrder = Number(newTotalPrice) +  Number(serviceFee) + Number(taxesFee);
  return (
    <>
      <h1>Order Summary</h1>
      <div>
        <div className="flex justify-between">
          <h5>Subtotal</h5>
          <span>${newTotalPrice}</span>
        </div>
        <div className="flex justify-between">
          <h5>Service Fee</h5>
          <span>${props.qtyItems > 0 ? serviceFee : 0}</span>
        </div>
        <div className="flex justify-between">
          <h5>Taxes & Other fees (HST)</h5>
          <span>${testVariable}</span>
        </div>
      </div>
      <div className="flex justify-end items-center gap-7 h-24 rounded-xl px-7">
        <div className="flex flex-col">
          <span className="text-zinc-400">
            Total ({props.qtyItems} {props.qtyItems === 1 ? "item" : "itens"}):
          </span>
          <span className="text-2xl font-semibold">${totalOrder.toFixed(2)}</span>
        </div>

        <Button variant="secondary" size="lg" href="/checkout/payment">
          <div className="flex flex-1">
            <IconShoppingCart size={22} className="mt-1" />
            <span>Order</span>
          </div>
        </Button>
      </div>
    </>
  );
}
