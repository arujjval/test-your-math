import React from 'react'
import { Button } from './ui/button'

const QuestionTemplate = (ques: any) => {
  
  let currAnswer = localStorage.getItem('answers')
  const currQues = ques.info
  const currIndex = ques.index

  function selectAnswer(e: any){
    if(currQues.answer == e.target.value) currAnswer = currAnswer?.substring(0, currIndex) + 'C' + currAnswer?.substring(currIndex + 1);
    else currAnswer = currAnswer?.substring(0, currIndex) + 'W' + currAnswer?.substring(currIndex + 1);

    localStorage.setItem('answers', currAnswer as string)    
    console.log(currAnswer)
  }

  return (
    <div className='flex flex-col gap-3'>
        <div className='question text-white md:text-2xl text-lg'>
            <p>{currQues.question}</p>
        </div>
        <div className='options flex flex-col gap-2'>
            {currQues.options.map((option: string, index: number) => (
                <Button key={index} variant="outline" onClick={selectAnswer} value={option} className='md:w-40 md:text-xl text-lg'>{option}</Button>
            ))}
        </div>
    </div>
  )
}

export default QuestionTemplate