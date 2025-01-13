import { Injectable } from '@nestjs/common';
import { Order, OrderItem } from '@menumate/core';
import { PrismaProvider } from 'src/db/prisma.provider';
import { OrderGateway } from './order.gateway';

@Injectable()
export class OrderService {
  private serviceFee = 4.99;
  private hstTax = 13.00;
  
  constructor(private readonly prisma: PrismaProvider, private readonly orderGateway: OrderGateway) {}

  async create(order: Order): Promise<void> {    
    const subTotal = this.evaluateOrderSubtotal(order.orderItems);
    const totalPrice = this.evalOrderFinalPrice(subTotal);

    const prismaOrder = {
      status: order.status,
      totalPrice: totalPrice,
      subTotal: subTotal,
      serviceFee: order.serviceFee,
      hstTax: this.evalOrderTax(subTotal),
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
    await this.prisma.order.create({
      data: prismaOrder,
    });
  }

  evaluateOrderSubtotal(orderItems: OrderItem[]) : number {
    let subTotal = 0;
    orderItems.forEach((orderItem) => {
      subTotal = subTotal + orderItem.price * orderItem.quantity;
    })
    return subTotal;
  }

  evalOrderFinalPrice(subTotal : number) : number {
    const finalPrice = subTotal  * (1 + (this.hstTax/100)) + this.serviceFee;
    return Number(finalPrice.toFixed(2));
  }

  evalOrderTax(subtotal: number) : number {
    const taxPrice = subtotal * (this.hstTax/100);
    return Number(taxPrice.toFixed(2));
  }

  async update(id: number, order: Order): Promise<void> {
    await this.prisma.order.update({
      where: { id },
      data: {
        status: order.status
      },
    });
    const updatedOrder = await this.getById(id);
    this.orderGateway.notifyOrderStatusUpdate(updatedOrder);
  }

  async get(): Promise<Order[]> {
    return this.prisma.order.findMany({
      include: {
        orderItems: true,
      },
    }) as any;
  }

  async getOrderByStatus(status: string): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: {
        status: {
          equals: status,
        },
      },
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
