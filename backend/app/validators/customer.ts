import vine from '@vinejs/vine'

export const createCustomerValidator = vine.create({
    name: vine.string().minLength(3).maxLength(255),
    phone: vine.string().minLength(9).maxLength(20),
})