import type { HttpContext } from "@adonisjs/core/http"
import Order from "#models/order"
import Customer from "#models/customer"
import Item from "#models/item"
import {
  createOrderValidator,
  createItemValidator,
  updateStatusValidator,
} from "#validators/order"
import db from "@adonisjs/lucid/services/db"

export default class OrdersController {
  async index({ response }: HttpContext) {
    const orders = await Order.all()
    return response.json({ orders })
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing({ createOrderValidator })
    const customer = await Customer.findOrFail(payload.customerId)

    let totalPrice = 0
    let itemsData = []

    for (const item of payload.items) {
      const itemPayload = await request.validateUsing(
        { createItemValidator },
        { data: item }
      )
      const itemRecord = await Item.findOrFail(item.itemId)
      if (!itemRecord.isActive) {
        return response.status(400).json({ error: `Item inativo` })
      }
      const itemTotal = itemRecord.price * item.quantity
      totalPrice += itemTotal
      itemsData.push({
        itemId: item.itemId,
        quantity: item.quantity,
        unitPrice: itemRecord.price,
        totalPrice: itemTotal,
      })
    }

    const order = await db.transaction(async (trx) => {
      const newOrder = await Order.create(
        {
          customerId: customer.id,
          totalPrice: totalPrice,
          status: payload.status,
        },
        { client: trx }
      )

      await newOrder
        .related("orderItems")
        .createMany(itemsData, { client: trx })

      return newOrder
    })
    await order.load("orderItems")
    await order.load("customer")
    return response.status(201).json({ order })
  }

  async updateStatus({ request, response, params }: HttpContext) {
    const payload = await request.validateUsing({ updateStatusValidator })
    const order = await Order.findOrFail(params.id)

    type Status =
      | "pendente"
      | "em_preparacao"
      | "pronto"
      | "finalizado"
      | "cancelado";
    const validTransitions: Record<Status, Status[]> = {
      pendente: ["em_preparacao", "cancelado"],
      em_preparacao: ["pronto", "cancelado"],
      pronto: ["finalizado", "cancelado"],
      finalizado: [],
      cancelado: [],
    }

    if (!validTransitions[order.status as Status].includes(payload.status)) {
      return response
        .status(400)
        .json({ error: `Transição de status inválida` })
    }

    order.status = payload.status
    await order.save()
    await order.load("orderItems")
    await order.load("customer")
    return response.json({ order })
  }
}
