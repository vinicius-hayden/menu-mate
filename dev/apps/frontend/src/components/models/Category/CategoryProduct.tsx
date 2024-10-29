import { Category } from "@menumate/core";
import MenuProduct from "../Product/MenuProduct";

export interface CategoryItemProps {
  category: Category;
}

export default function CategoryProduct(props: CategoryItemProps) {
  const { category } = props;

  return (
    <div key={category.id}>
      <h1>{category.name}</h1>
      {category.products.map((product) => (
        <MenuProduct key={product.id} product={product} />
      ))}
      <br />
    </div>
  );
}
