import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CategoryController } from './model/category/category.controller';
import { ProductModule } from './model/product/product.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [ProductModule, CategoryController, DbModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
