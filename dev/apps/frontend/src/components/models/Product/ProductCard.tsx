import { Product } from "@menumate/core";
import { Card } from "react-bootstrap";

export interface ProductCardProps {
  product: Product;
  onClick?: React.MouseEventHandler;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className="flex flex-wrap bg-slate-100 cursor-pointer hover:bg-slate-200" onClick={onClick}>
      <Card.Body className="mr-auto mt-4 ml-8">
        <Card.Title>{product.name}</Card.Title>
        <p className="mt-2 text-lg">${product.price.toFixed(2)}</p>
      </Card.Body>

      <Card.Img
        src={product.image}
        className="card-img-custom ml-auto mr-10 mt-1"
        alt={`Image of ${product.name}`}
      />
    </div>
  );
}
