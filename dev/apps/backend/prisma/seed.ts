import { PrismaClient } from '@prisma/client';
import { products } from '@menumate/core';
import { categories } from '@menumate/core';
import * as dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

async function generateCategories() {
  await prisma.category.createMany({
    data: categories.map((category) => ({
      name: category.name,
      image: category.image,
      description: category.description,
      sortOrder: category.sortOrder,
    })),
  });
}

async function generateProducts() {
  await prisma.product.createMany({
    data: products.map((product) => ({
      ...product,
      id: undefined, // Remove id, Prisma will auto-generate it
    })),
  });
}

async function seed() {
  await generateCategories(); // Ensure categories are created first
  await generateProducts(); // Then create products
}

seed()
  .catch((error) => {
    console.error('Seeding error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
