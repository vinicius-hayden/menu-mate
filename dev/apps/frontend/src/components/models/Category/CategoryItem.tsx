"use client";
import { Category } from "@menumate/core";
import Link from "next/link";
import { Card } from "react-bootstrap";
import "./CategoryItem.css";

export interface CategoryItemProps {
  category: Category;
}

export default function CategoryItem(props: CategoryItemProps) {
  const { category } = props;

  return (
    <Link href={`/category/${category.id}`}>
      <Card
        className="bg-dark text-white border-0 w-full max-w-xs"
        id="class-card"
      >
        <Card.Img
          src={category.image}
          alt="Card image"
          className="object-cover w-full h-full rounded-top"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-50 rounded-top"
          style={{ borderRadius: "0.375rem" }}
        />
        <Card.ImgOverlay className="flex items-center justify-center">
          <Card.Title className="relative z-10 text-lg">
            <p className="text-2xl">{category.name}</p>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
}
