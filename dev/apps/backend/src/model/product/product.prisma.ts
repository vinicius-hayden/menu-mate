import { Injectable } from '@nestjs/common';
import { Product } from '@menumate/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProductPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async save(product: Product): Promise<void> {
    await this.prisma.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    });
  }

  async get(): Promise<Product[]> {
    return this.prisma.product.findMany() as any;
  }

  async getById(id: number): Promise<Product | null> {
    const product = (await this.prisma.product.findUnique({
      where: { id },
    })) as any;
    return (product as any) ?? null;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
