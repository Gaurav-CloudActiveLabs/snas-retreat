import { BackgroundImage } from '@/Components/BackComponent';
import CreateNew from '@/Components/CustomComponents/CreateNew';
import { DataTable } from '@/components/data-table';
import { getUserContext } from '@/lib/userContext';
import React from 'react'
import type { Course } from './_components/columns';
import { columns } from './_components/columns'

type Props = {}

const Courses = async (props: Props) => {

  const userContext = await getUserContext();
  const courses = await userContext?.query.Course.findMany({
    query: "id title description status"
  })

  const data : Course[] = courses.map((course) => ({
   id: course.id,
   title: course.title,
   description: course.description,
   status: course.status
  }));

  return (
    <BackgroundImage>
      <div className="w-full h-full py-9 px-9">
        <div className='flex justify-end mb-4'>
        <CreateNew name='Courses' title='Create Course' route='/courses/create' />
        </div>
       <div>
       <DataTable columns={columns} data={data} isVisible={false} />
       </div>
      </div>
    </BackgroundImage>
  )
}

export default Courses;