"use client";

import useCategories from "@/data/hooks/useCategories";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./page.css";
import CategoryProduct from "@/components/models/Category/CategoryProduct";
import CategoryNotFound from "@/components/models/Category/CategoryNotFound";

type pageParams = {
  id: string;
};

export default function CategoryPage() {
  const [isIdAvailable, setIsIdAvailable] = useState<boolean>(false);
  const { id } = useParams<pageParams>();
  const { categories } = useCategories();
  const initialNumberId: number = Number(id) - 1;
  const [imageIdCategory, setImageIdCategory] = useState<number>(initialNumberId);

  function verifyParamsAvailability(categoryId?: number): boolean {
    const availableCategoryIds: string[] = availableCategories();
    if (!categoryId) {
      return availableCategoryIds.includes(id);
    } else {
      return availableCategoryIds.includes(categoryId.toString());
    }
  }

  function availableCategories(): string[] {
    return categories.map((category) => `${category.id}`);
  }

  function manageImageStateCategoryAvailability(event: any) {
    const entirelyNewId = event.target.id.replace('justify-tab-example-tab-', '');
    const newCategoryId = Number(entirelyNewId);

    if (verifyParamsAvailability(newCategoryId)) {
      handleImageIdCategory(entirelyNewId);
    } else {
      console.warn("Invalid category ID:", newCategoryId);
    }
  }

  function handleImageIdCategory(id: string) {
    const newId = Number(id) - 1;
    if (newId >= 0 && newId < categories.length) {
      setImageIdCategory(newId);
    } else {
      console.warn("Out-of-bounds category ID:", newId);
    }
  }

  useEffect(() => {
    if (verifyParamsAvailability()) {
      setIsIdAvailable(true);
    } else {
      setIsIdAvailable(false);
    }
  }, [categories, id]);

  if (!isIdAvailable || imageIdCategory < 0 || imageIdCategory >= categories.length) {
    return <CategoryNotFound />;
  }

  return (
    <>
      <div className="banner-image">
        <img
          src={categories[imageIdCategory]?.image}
          alt={categories[imageIdCategory]?.name || "Category"}
          className="image-category"
        />
      </div>
      <Tabs
        defaultActiveKey={categories[initialNumberId]?.id || ""}
        id="justify-tab-example"
        className="mb-3"
        justify
        onClick={(event) => manageImageStateCategoryAvailability(event)}
      >
        {categories.map((category) => (
          <Tab key={category.id} eventKey={category.id} title={category.name}>
            <CategoryProduct key={category.id} category={category} />
          </Tab>
        ))}
      </Tabs>
    </>
  );
}
