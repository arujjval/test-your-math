"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Selection from "./Selection"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  age: z.string().min(1, {
    message: "pls select your age",
  }),
  difficulty: z.string().min(1, {
    message: "pls select difficulty level",
  }),
  duration: z.string().min(1, {
    message: "pls select duration for the test",
  }),
})

export function SelectionForm() {

    const route = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        localStorage.setItem('values', JSON.stringify(values));
        route.push('/test')
    }

  return (
    <Form {...form}>
      <div className="flex md:flex-row flex-col opacity-90 w-full md:px-48 md:pt-20">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full flex flex-col items-center gap-16">
        <div className="flex md:flex-row md:justify-between md:h-40 md:w-full flex-col w-44 gap-14 opacity-60">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Age</FormLabel>
                  <Selection type={1} {...field}/>
                <FormMessage className="text-red-500"/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="difficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Difficulty</FormLabel>
                  <Selection type={2} {...field}/>
                <FormMessage className="text-red-500"/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Number of Questions</FormLabel>
                  <Selection type={3} {...field}/>
                <FormMessage className="text-red-500"/>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="bg-white w-28 md:scale-125">Start Test</Button>
      </form>
      </div>
    </Form>
  )
}
