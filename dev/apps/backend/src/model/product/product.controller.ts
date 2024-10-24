/* eslint-disable prettier/prettier */
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common'
import { Delete } from '@nestjs/common'
import { Get } from '@nestjs/common'
import { Param } from '@nestjs/common'
import { Post } from '@nestjs/common'
import { Put } from '@nestjs/common'
import { Product } from '@menumate/core';
import { ProductPrisma } from './product.prisma';

@Controller()
export class ProductController {
  constructor(readonly repo: ProductPrisma) {}

  @Post('post/products')
  async saveProduct(@Body() product: Product): Promise<void> {
    return this.repo.save(product);
  }

  @Put('product/:id')
  async updateProduct(@Param('id') id: string, @Body() product: Product): Promise<void> {
    return this.repo.update(+id, product);
  }

  @Get('products/')
  async getProduts(): Promise<Product[]> {
    return this.repo.get();
  }

  @Get('product/:id')
  async getProductById(@Param('id') id: string): Promise<Product | null> {
    return this.repo.getById(+id);
  }

  @Delete('product/:id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
