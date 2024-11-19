import { MdOutlineShoppingBag } from "react-icons/md";

export interface ShoppingCartIconProps {
  qtyItems: number;
}

export default function ShoppingCart(props: ShoppingCartIconProps) {
  return (
    <div className="flex justify-center items-center rounded-full w-14 h-14 relative">
      <MdOutlineShoppingBag size={30} stroke="1.3" />
      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
        {props.qtyItems}
      </div>
    </div>
  );
}
