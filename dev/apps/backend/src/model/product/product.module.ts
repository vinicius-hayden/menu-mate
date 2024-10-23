import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductPrisma } from './product.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ProductController],
  providers: [ProductPrisma],
})
export class ProductModule {}
