/* eslint-disable prettier/prettier */
import { Body } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { Delete } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Param } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Put } from "@nestjs/common";
import { Order } from "@menumate/core";
import { OrderPrisma } from "./order.prisma";

@Controller()
export class OrderController {
  constructor(readonly repo: OrderPrisma) {}

  // @Post()
  // async createOrder(@Body() orderDto: any) {
  //   const { status, subTotal, serviceFee, hstTax, paymentType, orderItems } = orderDto;

  //   });
  // }

  @Post('post/orders')
  async saveOrder(@Body() order: Order): Promise<void> {
    return this.repo.save(order);
  }

  @Put('orders/:id')
  async updateOrder(@Param('id') id: string, @Body() order: Order): Promise<void> {
    return this.repo.update(+id, order);
  }

  @Get('orders/')
  async getOrder(): Promise<Order[]> {
    return this.repo.get();
  }

  @Get('orders/:id')
  async getProductById(@Param('id') id: string): Promise<Order | null> {
    return this.repo.getById(+id);
  }

  @Delete('product/:id')
  async deleteOrder(@Param('id') id: string) : Promise<void> {
    return this.repo.delete(+id);
  }

} 