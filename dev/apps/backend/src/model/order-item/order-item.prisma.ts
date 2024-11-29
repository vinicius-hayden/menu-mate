import { Injectable } from '@nestjs/common';
import { OrderItem } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class OrderItemPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async save(orderItem: OrderItem): Promise<void> {
    await this.prisma.orderItem.upsert({
      where: { id: orderItem.id ?? -1 },
      update: {
        orderId: orderItem.orderId,
        productId: orderItem.productId,
        price: orderItem.price,
        quantity: orderItem.quantity,
      },
      create: {
        orderId: orderItem.orderId,
        productId: orderItem.productId,
        price: orderItem.price,
        quantity: orderItem.quantity,
      },
    });
  }

  async update(id: number, orderItem: OrderItem): Promise<void> {
    await this.prisma.orderItem.update({
      where: { id },
      data: orderItem,
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.orderItem.delete({ where: { id } });
  }
}
