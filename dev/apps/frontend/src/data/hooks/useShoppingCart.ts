import { useContext } from "react";
import  ContextShoppingCart  from "../contexts/ContextShoppingCart";

const useShoppingCart = () => {
  const context = useContext(ContextShoppingCart);
  console.log("Shopping cart context: ", context);
  return context;
}
export default useShoppingCart;