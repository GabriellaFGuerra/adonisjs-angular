import { OrderItemSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Item from '#models/item'
import Order from '#models/order'

export default class OrderItem extends OrderItemSchema {
    @belongsTo(() => Item)
    declare item: BelongsTo<typeof Item>

    @belongsTo(() => Order)
    declare order: BelongsTo<typeof Order>
}