import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className='flex flex-col gap-2'>
        <Skeleton className="w-full h-6 rounded-full bg-white/20" /> 
        <Skeleton className="w-full h-6 rounded-full bg-white/20" /> 
        <Skeleton className="w-full h-6 rounded-full bg-white/20" /> 
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-white/20" /> 
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-white/20" /> 
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-white/20" /> 
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-white/20" /> 
    </div>
  )
}

export default Loading