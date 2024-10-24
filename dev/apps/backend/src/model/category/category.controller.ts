/* eslint-disable prettier/prettier */
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common'
import { Delete } from '@nestjs/common'
import { Get } from '@nestjs/common'
import { Param } from '@nestjs/common'
import { Post } from '@nestjs/common'
import { Put } from '@nestjs/common'
import { Category } from '@menumate/core';
import { CategoryPrisma } from './category.prisma';

@Controller()
export class CategoryController {
  constructor(readonly repo: CategoryPrisma) {}

  @Post('post/categories')
  async saveCategory(@Body() category: Category): Promise<void> {
    return this.repo.save(category);
  }

  @Put('category/:id')
  async updateCategory(
    @Param('id') id: string,
    @Body() category: Category,
  ): Promise<void> {
    return this.repo.update(+id, category);
  }

  @Get('categories/')
  async getCategories(): Promise<Category[]> {
    return this.repo.get();
  }

  @Get('category/:id')
  async getCategoryById(@Param('id') id: string): Promise<Category | null> {
    return this.repo.getById(+id);
  }

  @Delete('category/:id')
  async deleteCategory(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
