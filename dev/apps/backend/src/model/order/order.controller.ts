/* eslint-disable prettier/prettier */
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Order } from '@menumate/core';
import { OrderPrisma } from './order.prisma';
import { Query } from '@nestjs/common';
import { OrderQueryDto } from './order-dto';

@Controller()
export class OrderController {
  constructor(readonly repo: OrderPrisma) {}

  @Post('post/orders')
  async saveOrder(@Body() order: Order): Promise<void> {
    return this.repo.save(order);
  }

  @Put('orders/:id')
  async updateOrder(@Param('id') id: string, @Body() order: Order): Promise<void> {
    return this.repo.update(+id, order);
  }

  @Get('orders/')
  async getOrders(@Query() query: OrderQueryDto): Promise<Order[]> {
    const { status } = query;
    if (status) {
      return this.repo.getOrderByStatus(status);
    }
    return this.repo.get();
  }

  @Get('orders/:id')
  async getProductById(@Param('id') id: string): Promise<Order | null> {
    return this.repo.getById(+id);
  }

  @Delete('orders/:id')
  async deleteOrder(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
