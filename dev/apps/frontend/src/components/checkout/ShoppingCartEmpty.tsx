import { IconShoppingCartOff } from "@tabler/icons-react";

export default function ShoppingCartEmpty() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-10">
      <IconShoppingCartOff size={180} stroke={0.5} />
      <span className="font-light">Shopping Cart is empty!</span>
    </div>
  );
}
