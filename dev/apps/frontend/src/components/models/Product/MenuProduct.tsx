import { Product } from "@menumate/core";
import ProductInformation from "./ProductInformation";
// import { ShoppingCartProvider } from '@/data/contexts/ContextShoppingCart';
import { ShoppingCartProvider } from "../../../data/contexts/ContextShoppingCart";

export interface MenuProductProps {
  product: Product;
}

export default function MenuProduct(props: MenuProductProps) {
  const { product } = props;

  return (
    <ShoppingCartProvider>
      <div key={product.id}>
        <ProductInformation product={product} />
      </div>
    </ShoppingCartProvider>
  );
}
