import * as zod from 'zod'

const email_regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const contactSchema = zod.object({
  name: zod
    .string({ required_error: 'This field cannot be empty' })
    .min(1, { message: 'This field cannot be empty' }),
  email: zod.string({ required_error: 'This field cannot be empty' }).refine(
    email => {
      console.log(email_regex.test(email))

      return email_regex.test(email)
    },
    { message: 'Invalid email' }
  ),
  description: zod.string().optional()
})
