import vine from "@vinejs/vine"

export const createItemValidator = vine.create({
  name: vine.string().minLength(3).maxLength(255),
  price: vine.number().min(0.01),
  is_active: vine.boolean(),
})
