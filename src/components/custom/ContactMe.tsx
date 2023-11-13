'use client'

import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import AnimateUpWhileInView from './AnimateWhileInView'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/schema/contactschema'
import { Button } from '../ui/button'
import ErrorMessage from './ErrorMessage'
import { onSubmit } from '@/actions/formSubmit'
import { cn } from '@/lib/utils'

function ContactMe () {
  //   const [submissionStatus, setSubmissionStatus] = useState({submitting : false,status : })
  const {
    register,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
    handleSubmit,
    getValues,
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  })
  return (
    <AnimateUpWhileInView>
      {isSubmitSuccessful ? (
        <div className='flex justify-center items-center lg:text-4xl md:text-3xl text-2xl'>
          Thank you for contacting me. I'll reach you soon.
        </div>
      ) : (
        <form
          className='flex flex-col items-center justify-start gap-4'
          onSubmit={handleSubmit(async e => {
            const response = await onSubmit(getValues())

            console.log(isSubmitted, isSubmitSuccessful)

            reset()
          })}
        >
          <div className='lg:w-3/5 md:w-4/5 w-full'>
            <Label>Name</Label>
            <Input {...register('name')} />
            <ErrorMessage>{errors.name?.message?.toString()}</ErrorMessage>
          </div>
          <div className='lg:w-3/5 md:w-4/5 w-full'>
            <Label>Email</Label>
            <Input {...register('email')} />
            <ErrorMessage>{errors.email?.message?.toString()}</ErrorMessage>
          </div>

          <div className='lg:w-3/5 md:w-4/5 w-full'>
            <Label>Body</Label>
            <Textarea rows={10} {...register('body')} />
            <ErrorMessage>{errors.body?.message?.toString()}</ErrorMessage>
          </div>
          <div>
            <Button
              type='submit'
              className={cn(
                isSubmitting ? 'opacity-40 cursor-not-allowed' : ''
              )}
            >
              {isSubmitted
                ? isSubmitSuccessful
                  ? 'Submitted'
                  : 'Submit Unseccessful'
                : isSubmitting
                ? 'Submitting'
                : 'Submit'}
            </Button>
          </div>
        </form>
      )}
    </AnimateUpWhileInView>
  )
}

export default ContactMe
