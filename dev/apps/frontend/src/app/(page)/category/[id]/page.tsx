"use client";

import useCategories from "@/data/hooks/useCategories";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./page.css";
import CategoryProduct from "@/components/models/Category/CategoryProduct";

type pageParams = {
  id: string;
};

export default function CategoryPage() {
  const [isIdAvailable, setIsIdAvailable] = useState<boolean>(false);
  const [tabCategory, setTabCategory] = useState();
  const { id } = useParams<pageParams>();
  const { categories } = useCategories();
  const numberId: number = Number(id) - 1;

  function verifyParamsAvailability(): boolean {
    const availableCategoryIds: string[] = [];
    categories.forEach((category, index) => {
      availableCategoryIds[index] = `${category.id}`;
    });
    const conditionalStatement: boolean = availableCategoryIds.includes(id);
    return conditionalStatement;
  }

  useEffect(() => {
    if (verifyParamsAvailability()) {
      setIsIdAvailable(true);
    }
  }, [categories, id]);

  if (isIdAvailable) {
    return (
      <>
        <img src={categories[numberId].image} alt="oie" />
        <Tabs
          defaultActiveKey={categories[numberId].name}
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          {categories.map((category) => {
            return (
              <Tab
                key={category.id}
                eventKey={category.name}
                title={category.name}
              >
                <CategoryProduct key={category.id} category={category} />
              </Tab>
            );
          })}
        </Tabs>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
