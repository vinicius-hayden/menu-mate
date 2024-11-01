"use client";

import { Category } from "@menumate/core";
import { useEffect, useState } from "react";

const urlBase = "http://localhost:3000";

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  async function getCategories(): Promise<Category[]> {
    const response = await fetch(`${urlBase}/categories/`);
    const categories = await response.json();
    return categories ?? [];
  }

  async function getCategoryById(id: number): Promise<Category | null> {
    const resp = await fetch(`${urlBase}/category/${id}`);
    const category = await resp.json();
    return category ?? null;
  }

  useEffect(() => {
    getCategories().then(setCategories);
  });

  return {
    categories,
    getCategoryById,
  };
}
