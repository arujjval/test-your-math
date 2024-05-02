"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import CountUp from "react-countup";
import { Button } from '@/components/ui/button';

function count(str: string, char: string) {
    if(str == '' || str == null) return 0;
    
    let cnt = 0;
    for(const i of str) {
        if(i === char) {
            cnt++;
        }
    }
    return cnt;
}

const page = () => {
    const [result, setResult] = useState<string>('')
    const route = useRouter()

    useEffect(() => {
        setResult(localStorage.getItem('answers') as string)
    }, [])

    function closeTest() {
        localStorage.clear();
        route.push('/')
    }

    const correct = count(result, 'C')
    

    return (
    <div className="min-h-screen w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="h-full w-full flex flex-col items-center justify-center gap-5 px-20">
            <div className='text-white text-2xl'>
                Congratulations on completing the test 🎉 
            </div>
            <div className='text-white'>Your score: </div>
            <div className='text-white text-6xl'><CountUp start={0} end={correct} duration={5}/> / {result?.length}</div>
            <Button className='text-white mt-20' onClick={closeTest} variant="outline">Finish</ Button>
        </div>
    </div>
    )
}

export default page