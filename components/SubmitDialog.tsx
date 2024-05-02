import React, { useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from 'next/navigation'

  

const SubmitDialog = () => {
    const [submittedAnswers, setSubmittedAnswers] = useState<string>('')
    const route = useRouter()
    const pathname = usePathname()

    useEffect(() => (
        setSubmittedAnswers(localStorage.getItem('answers') as string)
    ),[])

    const submit = () => {
        route.push(pathname + '/result')
    }

    const description = (submittedAnswers?.includes('N'))? "Are you sure? you have not answered all the questions": "Are you sure you want to submit your answers";

    return (
    <div className='text-white'>
        <AlertDialog>
        <AlertDialogTrigger>
            <Button variant="outline">Submit</Button>
        </AlertDialogTrigger>
        <div className='text-white'> 
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle className='text-white'>Conforming Submission</AlertDialogTitle>
            <AlertDialogDescription className='text-white'>
                {description}
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel className='text-white'>Cancel</AlertDialogCancel>
            <AlertDialogAction className='text-white' onClick={submit}>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </div>
        </AlertDialog>
    </div>
    )
}

export default SubmitDialog