import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './model/product/product.module';
import { DbModule } from './db/db.module';
import { CategoryModule } from './model/category/category.module';

@Module({
  imports: [ProductModule, CategoryModule, DbModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
