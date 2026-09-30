import type { HttpContext } from '@adonisjs/core/http'
import Item from '#models/item'
import { createItemValidator } from '#validators/item'

export default class ItemsController {

    async index({ response }: HttpContext) {
        const items = await Item.all()
        return response.json({items})
    }

    async store({ request, response }: HttpContext) {
        const payload = await request.validateUsing({ createItemValidator })
        const item = await Item.create(payload)
        return response.status(201).json({item})
    }

    async update({ request, response, params }: HttpContext) {
        const payload = await request.validateUsing({ createItemValidator })
        const item = await Item.findOrFail(params.id)
        item.merge(payload)
        await item.save()
        return response.status(200).json({item})
    }
}