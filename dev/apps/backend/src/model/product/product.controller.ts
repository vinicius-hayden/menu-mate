import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from '@menumate/core';
import { ProductPrisma } from './product.prisma';

@Controller('products')
export class ProductController {
  constructor(readonly repo: ProductPrisma) {}

  @Post()
  async saveProduct(@Body() product: Product): Promise<void> {
    return this.repo.save(product);
  }

  @Get()
  async getProduts(): Promise<Product[]> {
    return this.repo.get();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product | null> {
    return this.repo.getById(+id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
