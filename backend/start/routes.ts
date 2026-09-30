/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from "#start/kernel"
import router from "@adonisjs/core/services/router"
import { controllers } from "#generated/controllers"

router.get("/", () => {
  return { hello: "world" }
})

router.get("/customer", [controllers.Customers, "index"])
router.post("/customer", [controllers.Customers, "store"])
router.put("/customer/:id", [controllers.Customers, "update"])

router.get("/item", [controllers.Items, "index"])
router.post("/item", [controllers.Items, "store"])
router.put("/item/:id", [controllers.Items, "update"])

router.get("/order", [controllers.Orders, "index"])
router.post("/order", [controllers.Orders, "store"])
router.put("/order/:id", [controllers.Orders, "updateStatus"])

router
  .group(() => {
    router
      .group(() => {
        router.post("signup", [controllers.NewAccount, "store"])
        router.post("login", [controllers.AccessTokens, "store"])
      })
      .prefix("auth")
      .as("auth")

    router
      .group(() => {
        router.get("profile", [controllers.Profile, "show"])
        router.post("logout", [controllers.AccessTokens, "destroy"])
      })
      .prefix("account")
      .as("profile")
      .use(middleware.auth())
  })
  .prefix("/api/v1")
