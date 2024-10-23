import Product from "../product/Product";

export default interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
  sortOrder: number;
  products: Product[];
}
