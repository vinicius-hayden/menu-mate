import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { DbModule } from 'src/db/db.module';
import { OrderPrisma } from './order.prisma';

@Module({
  imports: [DbModule],
  controllers: [OrderController],
  providers: [OrderPrisma],
})
export class OrderModule {}
