"use client";

import React from 'react'
import Button  from '@/Components/CustomComponents/Button';
import { useRouter } from 'next/navigation'


type Props = {
  name?: string;
  text?:string;
  route?: string;
  title?: string;
}

const CreateNew = ({name , text , route , title }: Props) => {
  const router = useRouter();
  return (
   <>
   <div className='flex w-full font-semibold justify-between items-center'>
   <h1 className='text-3xl font-medium  text-[#25324B]'>{name}</h1>
   <Button className='bg-[#4640DE] px-8 py-3 flex gap-2 text-white font-medium' title={title} icon="/images/plus.svg" handleClick={() => router.push(`${route}`)}  />
   </div>
   </>
  )
}

export default CreateNew;