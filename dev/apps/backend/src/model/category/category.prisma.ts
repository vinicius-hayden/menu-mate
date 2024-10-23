import { Injectable } from '@nestjs/common';
import { Category } from '@menumate/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class CategoryPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async save(category: Category): Promise<void> {
    await this.prisma.category.upsert({
      where: { id: category.id ?? -1 },
      update: category,
      create: category,
    });
  }

  async get(): Promise<Category[]> {
    return this.prisma.category.findMany() as any;
  }

  async getById(id: number): Promise<Category | null> {
    const category = (await this.prisma.category.findUnique({
      where: { id },
    })) as any;
    return (category as any) ?? null;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.category.delete({ where: { id } });
  }
}
