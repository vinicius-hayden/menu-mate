import Product from "../product/Product";
import { v4 as uuidv4 } from "uuid";

const products: Product[] = [
  {
    id: uuidv4(),
    name: "Oklahoma Burger",
    description: "Surprise your tastebuds with this",
    price: 12.29,
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_0005-999_BigMac_1564x1564-1?wid=1000&hei=1000&dpr=off",
    sortOrder: 1,
    categoryId: 1,
  },
  {
    id: uuidv4(),
    name: "Mississipi Burger",
    description: "Surprise your tastebuds with this",
    price: 13.29,
    image:
      "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564?wid=1000&hei=1000&dpr=off",
    sortOrder: 2,
    categoryId: 1,
  },
  {
    id: uuidv4(),
    name: "Catupiry Chicken Pizza",
    description: "Surprise your tastebuds with this",
    price: 23.29,
    image:
      "https://superpizzapan.com.br/wp-content/uploads/2024/04/frango-catupiry.png",
    sortOrder: 1,
    categoryId: 2,
  },
  {
    id: uuidv4(),
    name: "Philadelphia Hot Roll",
    description: "Surprise your tastebuds with this",
    price: 25.29,
    image:
      "https://ocoee.toukensushi.com/cdn/shop/products/rollhotroll_large.png?v=1603319706",
    sortOrder: 1,
    categoryId: 3,
  },
  {
    id: uuidv4(),
    name: "Tiramisu",
    description: "Surprise your tastebuds with this",
    price: 15.29,
    image: "https://cdn7.kiwilimon.com/recetaimagen/36546/51101.jpg",
    sortOrder: 1,
    categoryId: 4,
  },
  {
    id: uuidv4(),
    name: "Coca-Cola",
    description: "Surprise your tastebuds with this",
    price: 4.29,
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3f085e0e-e434-45e0-8403-8011b553165b.jpg",
    sortOrder: 1,
    categoryId: 5,
  },
];

export default products;
