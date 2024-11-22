import { useContext } from "react";
import  ContextShoppingCart  from "../contexts/ContextShoppingCart";

const useShoppingCart = () => {
  const context = useContext(ContextShoppingCart);
  return context;
}
export default useShoppingCart;