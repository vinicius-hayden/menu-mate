import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Category } from '@menumate/core';
import { CategoryPrisma } from './category.prisma';

@Controller('categories')
export class CategoryController {
  constructor(readonly repo: CategoryPrisma) {}

  @Post()
  async saveCategory(@Body() category: Category): Promise<void> {
    return this.repo.save(category);
  }

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.repo.get();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string): Promise<Category | null> {
    return this.repo.getById(+id);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
