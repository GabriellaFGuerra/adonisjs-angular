import { BaseSeeder } from "@adonisjs/lucid/seeders"
import Item from "#models/item"

export default class extends BaseSeeder {
  async run() {
    await Item.createMany([
      {
        name: "Hambúrguer clássico",
        price: 24.9,
        isActive: true,
      },
      {
        name: "Pizza margherita",
        price: 39.9,
        isActive: false,
      },
      {
        name: "Salada Caesar",
        price: 22.9,
        isActive: true,
      },
      {
        name: "Batata frita",
        price: 12.9,
        isActive: true,
      },
      {
        name: "Refrigerante",
        price: 6.9,
        isActive: true,
      },
    ])
  }
}
