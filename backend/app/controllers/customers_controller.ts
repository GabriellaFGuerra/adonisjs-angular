import type { HttpContext } from "@adonisjs/core/http"
import Customer from "#models/customer"
import { createCustomerValidator } from "#validators/customer"

export default class CustomersController {
  async index({ response }: HttpContext) {
    const customers = await Customer.all()
    return response.json({ customers })
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCustomerValidator)
    const customer = await Customer.create(payload)
    return response.status(201).json({ customer })
  }

  async update({ request, response, params }: HttpContext) {
    const payload = await request.validateUsing(createCustomerValidator)
    const customer = await Customer.findOrFail(params.id)
    customer.merge(payload)
    await customer.save()
    return response.json({ customer })
  }
}
