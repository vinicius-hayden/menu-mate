import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { DbModule } from 'src/db/db.module';
import { OrderService } from './order.service';
import { OrderGateway } from './order.gateway';

@Module({
  imports: [DbModule],
  controllers: [OrderController],
  providers: [OrderService, OrderGateway],
})
export class OrderModule {}
