import { Product } from "@menumate/core";
import ProductInformation from "./ProductInformation";

export interface MenuProductProps {
  product: Product;
}

export default function MenuProduct(props: MenuProductProps) {
  const { product } = props;

  return (
    <div key={product.id}>
      <ProductInformation product={product} / >
    </div>
  );
}
