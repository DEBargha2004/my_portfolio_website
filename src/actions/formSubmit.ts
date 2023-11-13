'use server'

import { error } from 'console'
import { FieldValues } from 'react-hook-form'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function onSubmit (e: FieldValues) {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'debarghasaha16@gmail.com',
      subject: e.name,
      html: `
        <h1>${e.email}</h1>
        <p>${e.body}</p>
        `
    })

    return { status: true }
  } catch (error) {
    console.log(error)
    // return { status: false }
  }
}
