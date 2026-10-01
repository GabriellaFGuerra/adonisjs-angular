import { Routes } from "@angular/router"

import { Customers } from "./customers/customers"
import { Items } from "./items/items"
import { Orders } from "./orders/orders"
import { OrderDetail } from "./orders/order-detail"

export const routes: Routes = [
  {
    path: "",
    redirectTo: "orders",
    pathMatch: "full",
  },

  {
    path: "customers",
    component: Customers,
  },

  {
    path: "items",
    component: Items,
  },

  {
    path: "orders",
    component: Orders,
  },

  {
    path: "orders/:id",
    component: OrderDetail,
  },
]
