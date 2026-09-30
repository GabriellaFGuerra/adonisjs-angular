import { CustomerSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Order from '#models/order'

export default class Customer extends CustomerSchema {
    @hasMany(() => Order)
    declare order: HasMany<typeof Order>
}