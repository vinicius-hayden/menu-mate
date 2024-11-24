import { IconShoppingCart } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export interface ShoppingCartTotalProps {
  qtyItems: number;
  totalPrice: number;
}

export default function ShoppingCartTotal(props: ShoppingCartTotalProps) {
  const [serviceFee, setServiceFee] = useState(0.0);
  const [totalProductPrice, setTotalProductPrice] = useState(0.0);
  const [taxesFee, setTaxesFee] = useState(0.0);
  const [totalOrderPrice, setTotalOrderPrice] = useState(0.0)

  useEffect(() => {
    if (props.qtyItems > 0) {
      setServiceFee(4.99);
      setTaxesFee((props.totalPrice * 0.13));
      setTotalProductPrice(Number(props.totalPrice.toFixed(2)));
      setTotalOrderPrice(Number(totalProductPrice) + Number(serviceFee) + Number(taxesFee));
    }
  }, [props.qtyItems, props.totalPrice, serviceFee, taxesFee, totalProductPrice, totalOrderPrice]);

  if (props.qtyItems > 0) {
    return (
      <>
        <h1>Order Summary</h1>
        <div>
          <div className="flex justify-between">
            <h5>Subtotal</h5>
            <span>${totalProductPrice}</span>
          </div>
          <div className="flex justify-between">
            <h5>Service Fee</h5>
            <span>${props.qtyItems > 0 ? serviceFee : 0}</span>
          </div>
          <div className="flex justify-between">
            <h5>Taxes & Other fees (HST)</h5>
            <span>${taxesFee.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex justify-end items-center h-12 rounded-xl">
          <div className="flex flex-1 justify-between">
            <span className="text-zinc-400">
              Total ({props.qtyItems} {props.qtyItems === 1 ? "item" : "items"})
            </span>
            <span className="text-2xl font-semibold">${totalOrderPrice.toFixed(2)}</span>
          </div>
  
        </div>
          <Button variant="secondary" size="lg" href="/checkout/payment">
            <div className="flex flex-1 justify-center items-center">
              <IconShoppingCart size={22} className="" />
              <span>Order</span>
            </div>
          </Button>
      </>
    );
  } else {
    return <></>
  }
  
}
