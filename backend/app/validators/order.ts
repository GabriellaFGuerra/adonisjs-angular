import vine from "@vinejs/vine";

export const createOrderValidator = vine.create({
  customerId: vine.number().min(1).withoutDecimals(),
  items: vine.array(
    vine.object({
      itemId: vine.number().min(1).withoutDecimals(),
      quantity: vine.number().min(1).withoutDecimals(),
    })
  ),
  status: vine
    .enum(["pendente", "em_preparacao", "pronto", "finalizado", "cancelado"])
    .default("pendente"),
});

export const createItemValidator = vine.create({
  itemId: vine.number().min(1).withoutDecimals(),
  quantity: vine.number().min(1).withoutDecimals(),
});

export const updateStatusValidator = vine.create({
  status: vine.enum([
    "pendente",
    "em_preparacao",
    "pronto",
    "finalizado",
    "cancelado",
  ]),
});
