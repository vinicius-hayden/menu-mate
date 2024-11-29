import { Injectable } from '@nestjs/common';
import { Order } from '@menumate/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class OrderPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async save(order: Order): Promise<void> {
    const prismaOrder = {
      status: order.status,
      totalPrice: order.totalPrice,
      subTotal: order.subTotal,
      serviceFee: order.serviceFee,
      hstTax: order.hstTax,
      paymentType: order.paymentType,
      updatedAt: new Date(),
      orderItems: {
        create: order.orderItems.map((item) => ({
          productId: item.productId,
          price: item.price,
          totalPrice: item.price * item.quantity,
          quantity: item.quantity,
        })),
      },
    };
    await this.prisma.order.upsert({
      where: { id: order.id ?? -1 },
      update: prismaOrder,
      create: prismaOrder,
    });
  }

  async update(id: number, order: Order): Promise<void> {
    await this.prisma.order.update({
      where: { id },
      data: {
        status: order.status,
        totalPrice: order.totalPrice,
        subTotal: order.subTotal,
        serviceFee: order.serviceFee,
        hstTax: order.hstTax,
        paymentType: order.paymentType,
        updatedAt: new Date(),
        orderItems: order.orderItems
          ? {
              upsert: order.orderItems.map((item) => ({
                where: { id: item.id ?? -1 },
                create: {
                  productId: item.productId,
                  price: item.price,
                  totalPrice: item.price * item.quantity,
                  quantity: item.quantity,
                },
                update: {
                  productId: item.productId,
                  price: item.price,
                  totalPrice: item.price * item.quantity,
                  quantity: item.quantity,
                },
              })),
            }
          : undefined,
      },
    });
  }

  async get(): Promise<Order[]> {
    return this.prisma.order.findMany({
      include: {
        orderItems: true,
      },
    }) as any;
  }

  async getById(id: number): Promise<Order | null> {
    const order = (await this.prisma.order.findUnique({
      where: { id },
      include: {
        orderItems: true,
      },
    })) as any;
    return (order as any) ?? null;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.orderItem.deleteMany({ where: { orderId: id } });
    await this.prisma.order.delete({ where: { id } });
  }
}
