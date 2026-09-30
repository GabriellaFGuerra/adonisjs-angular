import { OrderSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Customer from '#models/customer'
import OrderItem from '#models/order_item'

export default class Order extends OrderSchema {
    @belongsTo(() => Customer)
    declare customer: BelongsTo<typeof Customer>

    @hasMany(() => OrderItem)
    declare orderItems: HasMany<typeof OrderItem>
}