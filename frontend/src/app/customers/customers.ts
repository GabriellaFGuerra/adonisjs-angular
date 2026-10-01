import { Component, inject, signal } from "@angular/core"
import { Customers as CustomersService } from "../services/customers"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-customers",
  imports: [FormsModule],
  templateUrl: "./customers.html",
  styleUrl: "./customers.css",
})
export class Customers {
  private customersService = inject(CustomersService)

  customers = signal<any[]>([])

  name = ""
  phone = ""

  editingCustomerId: number | null = null

  constructor() {
    this.getCustomers()
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe((response) => {
      this.customers.set(response.customers)
    })
  }

  createCustomer() {
    this.customersService
      .createCustomer(this.name, this.phone)
      .subscribe(() => {
        this.name = ""
        this.phone = ""

        this.getCustomers()
      })
  }

  clearEdit() {
    this.editingCustomerId = null
    this.name = ""
    this.phone = ""
  }

  editCustomer(customer: any) {
    this.editingCustomerId = customer.id
    this.name = customer.name
    this.phone = customer.phone
  }

  updateCustomer() {
    if (this.editingCustomerId !== null) {
      const updatedCustomer = {
        id: this.editingCustomerId,
        name: this.name,
        phone: this.phone,
      }

      this.customersService
        .updateCustomer(updatedCustomer)
        .subscribe(() => {
          this.clearEdit()
          this.getCustomers()
        })
    }
  }
}