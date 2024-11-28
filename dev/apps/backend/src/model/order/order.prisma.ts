import { Injectable } from '@nestjs/common';
import { Order } from '@menumate/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class OrderPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async save(order: Order): Promise<void> {
    const prismaOrder = {
      status: order.status,
      subTotal: order.subTotal,
      serviceFee: order.serviceFee,
      hstTax: order.hstTax,
      paymentType: order.paymentType,
      updatedAt: new Date(),
    };
    await this.prisma.order.upsert({
      where: { id: order.id ?? -1 },
      update: prismaOrder,
      create: prismaOrder,
    });
  }
}
