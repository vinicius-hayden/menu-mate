"use client";
import useCategories from "@/data/hooks/useCategories";
import CategoryProduct from "@/components/models/Category/CategoryProduct";

export default function Menu(): any {
  const { categories } = useCategories();

  return (
    <>
      <div className="products-menu">
        {categories.map((category) => (
          <CategoryProduct key={category.id} category={category}/>
        ))}
      </div>
    </>
  );
}
