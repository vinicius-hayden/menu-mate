import { useContext } from "react";
import  ContextShoppingCart  from "../contexts/ContextShoppingCart";

const useShoppingCart = () => useContext(ContextShoppingCart);
export default useShoppingCart;