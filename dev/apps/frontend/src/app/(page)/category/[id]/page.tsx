/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
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
  const { id } = useParams<pageParams>();
  const { categories } = useCategories();
  const numberId: number = Number(id) - 1;
  const [imageIdCategory, setImageIdCategory] = useState<number>(numberId);

  function verifyParamsAvailability(): boolean {
    const availableCategoryIds: string[] = [];
    categories.forEach((category, index) => {
      availableCategoryIds[index] = `${category.id}`;
    });
    const conditionalStatement: boolean = availableCategoryIds.includes(id);
    return conditionalStatement;
  }

  function handleFunction(e: any) {
    const entirelyNewId : string = e.target.id.replace('justify-tab-example-tab-','');
    
    //copying and pasting code, please remove after
    const availableCategoryIds: string[] = [];
    categories.forEach((category, index) => {
      availableCategoryIds[index] = `${category.id}`;
    });
    const conditionalStatement: boolean = availableCategoryIds.includes(entirelyNewId);
    //copying and pasting code, please remove after

    if (conditionalStatement) {
      console.log("aqui");
      handleImageIdCategory(entirelyNewId);
    } else {
      // console.log("aqui ->", numberId);
      // console.log(imageIdCategory);
      // console.log("deu bo aqui ---->",categories[imageIdCategory].image);
      // console.log("this will be the element", e.target.lastElementChild);
      handleImageIdCategory(numberId.toString());
    }
  }

  function handleImageIdCategory(id : string) {
    setImageIdCategory(Number(id)-1);
  }

  useEffect(() => {
    if (verifyParamsAvailability()) {
      setIsIdAvailable(true);
    }
  }, [categories, id]);

  if (isIdAvailable) {
    return (
      <>
      <div className="banner-image">
        <img src={categories[imageIdCategory].image} alt="oie" className="image-category"/>
      </div>
        <Tabs defaultActiveKey={categories[numberId].id}
          id="justify-tab-example"
          className="mb-3"
          justify
          onClick={(event) => handleFunction(event)}
        >
          {categories.map((category) => {
            return (
              <Tab key={category.id} eventKey={category.id} title={category.name}>
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
