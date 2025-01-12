import { IconShoppingCart } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2'

export interface ShoppingCartTotalProps {
  qtyItems: number;
  totalPrice: number;
}

export default function ShoppingCartTotal(props: ShoppingCartTotalProps) {
  const [serviceFee, setServiceFee] = useState(0.0);
  const [totalItemsAmount, setTotalItemsAmount] = useState(0.0);
  const [taxesFee, setTaxesFee] = useState(0.0);
  const [orderFinalAmount, setOrderFinalAmount] = useState(0.0);

  useEffect(() => {
    if (props.qtyItems > 0) {
      setServiceFee(4.99);
      setTaxesFee(props.totalPrice * 0.13);
      setTotalItemsAmount(Number(props.totalPrice.toFixed(2)));
      setOrderFinalAmount(
        Number(totalItemsAmount) + Number(serviceFee) + Number(taxesFee),
      );
    }
  }, [
    props.qtyItems,
    props.totalPrice,
    serviceFee,
    taxesFee,
    totalItemsAmount,
    orderFinalAmount,
  ]);

  async function functionBunction(e: any) {
    e.preventDefault();

    const order = {
      status: 'pending',
      totalPrice: orderFinalAmount,
      subTotal: totalItemsAmount,
      serviceFee: serviceFee,
      hstTax: taxesFee,
      paymentType: 'credit_card',
      orderItems: JSON.parse(localStorage.shoppingcart).map((item: any) => ({
        productId: item.product.id,
        price: item.product.price,
        quantity: item.quantity,
      })),
    };

    try {
      const request = await fetch("http://localhost:3000/post/orders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      })
      
      if (request.ok) {
        Swal.fire({
          icon: 'success',
          title: "Success!",
          text: 'Order made!',
          confirmButtonText: 'OK',
          confirmButtonColor: '#4CAF50'
        }).then(
          function() {
            localStorage.removeItem('shoppingcart')
            location.assign('/checkout/payment');
          }
        )
      } else {
        Swal.fire({
          icon: 'error',
          title: "Error",
          text: 'Failed to create order',
          confirmButtonText: 'OK',
          confirmButtonColor: '#F44336'
        })
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to request order. Please try again',
        confirmButtonText: 'OK',
        confirmButtonColor: '#F44336'
      });
    }
  }

  if (props.qtyItems > 0) {
    return (
      <>
        <h1>Order Summary</h1>
        <div>
          <div className="flex justify-between">
            <h5>Subtotal</h5>
            <span>${totalItemsAmount}</span>
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
            <span className="text-2xl font-semibold">
              ${orderFinalAmount.toFixed(2)}
            </span>
          </div>
        </div>
        <Button variant="secondary" size="lg">
          <div
            className="flex flex-1 justify-center items-center"
            onClick={(e) => functionBunction(e)}
          >
            <IconShoppingCart size={22} className="" />
            <span>Order</span>
          </div>
        </Button>
      </>
    );
  } else {
    return <></>;
  }
}
