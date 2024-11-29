import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './model/product/product.module';
import { OrderModule } from './model/order/order.module';
import { DbModule } from './db/db.module';
import { CategoryModule } from './model/category/category.module';

@Module({
  imports: [ProductModule, CategoryModule, DbModule, OrderModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
