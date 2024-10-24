import { Injectable } from '@nestjs/common';
import { Category } from '@menumate/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class CategoryPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async save(category: Category): Promise<void> {
    await this.prisma.category.upsert({
      where: { id: category.id ?? -1 },
      update: {
        name: category.name,
        image: category.image,
        description: category.description,
        sortOrder: category.sortOrder,
      },
      create: {
        name: category.name,
        image: category.image,
        description: category.description,
        sortOrder: category.sortOrder,
      },
    });
  }

  async update(id: number, category: Category): Promise<void> {
    await this.prisma.category.update({
      where: { id },
      data: {
        name: category.name,
        image: category.image,
        description: category.description,
        sortOrder: category.sortOrder,
      },
    });
  }

  async get(): Promise<Category[]> {
    return this.prisma.category.findMany({
      include: {
        products: true,
      },
    }) as any;
  }

  async getById(id: number): Promise<Category | null> {
    const category = (await this.prisma.category.findUnique({
      where: { id },
      include: {
        products: true,
      },
    })) as any;
    return (category as any) ?? null;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.category.delete({ where: { id } });
  }
}
