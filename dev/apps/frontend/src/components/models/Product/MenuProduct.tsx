import { Product } from "@menumate/core";
import { Card } from "react-bootstrap";

export interface MenuProductProps {
  product: Product;
}

export default function MenuProduct(props: MenuProductProps) {
  const { product } = props;

  return (
    <div key={product.id}>
      <div className="flex flex-wrap bg-slate-100">
        <Card.Body key={product.id} className="mr-auto mt-4 ml-8">
          <Card.Title>{product.name}</Card.Title>
          <p className="mt-2 text-lg">${product.price}</p>
        </Card.Body>

        <Card.Img
          src={product.image}
          className="card-img-custom ml-auto mr-10 mt-1"
          alt="Product Image"
        />
      </div>
      <br />
    </div>
  );
}
