import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { DbModule } from 'src/db/db.module';
import { CategoryPrisma } from './category.prisma';

@Module({
  imports: [DbModule],
  controllers: [CategoryController],
  providers: [CategoryPrisma],
})
export class CategoryModule {}
