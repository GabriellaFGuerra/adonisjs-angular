import { ItemSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import OrderItem from '#models/order_item'

export default class Item extends ItemSchema {
    @belongsTo(() => OrderItem)
    declare orderItem: BelongsTo<typeof OrderItem>
}