"use client";
import CategoryItem from "@/components/models/Category/CategoryItem";
import useCategories from "@/data/hooks/useCategories";
import "bootstrap/dist/css/bootstrap.min.css";
import "./page.css";

export default function Home() {
  const { categories } = useCategories();
  return (
    <div className="cards-categories">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
