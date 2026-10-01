import { Component, inject } from "@angular/core"
import { Items as ItemsService } from "../services/items"
import { FormsModule } from "@angular/forms"

@Component({
  imports: [FormsModule],
  selector: "app-items",
  styleUrl: "./items.css",
  templateUrl: "./items.html",
})
export class Items {
  private itemsService = inject(ItemsService)

  items: any[] = []
  name = ""
  price = 0
  is_active = "true"
  editingItemId: number | null = null

  constructor() {
    this.getItems()
  }

  getItems() {
    this.itemsService.getItems().subscribe((items) => {
      this.items = items.items
    })
  }

  createItem(name: string, price: number, status: string) {
    this.itemsService.createItem(name, price, status).subscribe(() => {
      this.getItems()
    })
  }

  clearEdit() {
    this.editingItemId = null
    this.name = ""
    this.price = 0
    this.is_active = "1"
  }

  editItem(item: any) {
    this.editingItemId = item.id
    this.name = item.name
    this.price = item.price
    this.is_active = item.is_active ? "1" : "0"
  }

  updateItem() {
    if (this.editingItemId !== null) {
      const updatedItem = {
        id: this.editingItemId,
        name: this.name,
        price: this.price,
        is_active: this.is_active === "1",
      }
      this.itemsService.updateItem(updatedItem).subscribe(() => {
        this.clearEdit()
        this.getItems()
      })
    }
  }
}
