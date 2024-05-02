"use client";
import React from 'react'
import { useEffect, useState } from 'react'
import run from '@/lib/getQuestions'
import JSON5 from 'json5'
import QuestionTemplate from '@/components/QuestionTemplate';
import Loading from '@/components/Loading';
import SubmitDialog from '@/components/SubmitDialog';
import Timer from '@/components/Timer';
import { Button } from '@/components/ui/button';


const page = () => {
  const [ques, setQues] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [currQues, setCurrQues] = useState<number>(0)

  const data = localStorage.getItem('values')
  const values = JSON5.parse(data as string) 

  useEffect(() => {
    run(values).then((data) => {
      setQues(data)
      setLoading(false)
      localStorage.setItem('answers', 'N'.repeat(data.length))
      console.log(localStorage.getItem('answers'))
    })
  }, [])

  function prevQues(){
    setCurrQues(currQues - 1)
  }

  function nextQues(){
    setCurrQues(currQues + 1)
  }

  return (
    <div className="min-h-screen w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-full max-w-[1400px] w-full flex flex-col justify-center md:p-20 p-10 gap-16 ">
      <div className={loading ? 'hidden' : 'text-white w-full flex md:justify-end justify-center pb-10'}>
        <Timer time={ques.length}/>
      </div>
      <div className='w-full h-full bg-slate-400/30 rounded-xl text-white flex flex-col md:p-20 p-5 text-sm md:text-base'>
        {loading? 
        <Loading />
        : 
        <div>
          {ques.length > 0  && <QuestionTemplate info={ques[currQues]} index={currQues} />}
          <div className='flex flex-row justify-between text-white py-5'>
            <div>
              <Button onClick={prevQues} className={((currQues == 0)?'hidden' : 'bg-white text-black')}>prev</Button>
            </div>
            <div>
              <Button onClick={nextQues} className={((currQues == ques.length-1)?'hidden' : 'bg-white text-black')}>next</Button>
            </div>
          </div>
        </div>
        }
        </div>
        <div className={loading ? 'hidden' : 'text-white w-full flex justify-center'}>
          <SubmitDialog />
        </div>
      </div>
    </div>
  )
}

export default page