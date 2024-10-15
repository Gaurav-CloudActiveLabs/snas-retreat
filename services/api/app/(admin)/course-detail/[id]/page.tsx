import { BackgroundImage } from '@/Components/BackComponent';
import React from 'react'
import CourseHeader from '../_components/course-header';
import { getUserContext } from '@/lib/userContext';
import { DataTable } from '@/components/data-table';
import { columns } from '../_components/columns';
import type { CourseDetail } from '../_components/columns';

type Props = {}

const CourseDetail = async ({ params }: { params: { id: string } }) => {
    

  const userContext = await getUserContext();
  const courses = await userContext?.query.Course.findOne({
    where:{
        id: params.id
    },
    query: " id lessons { id title status } "
  })

  const data: CourseDetail[] = [{
    id: courses.id,
    lessons: courses.lessons.map((lesson: { id: string; title: string; status: string }) => ({
      id: lesson.id,
      title: lesson.title,
      status: lesson.status,
    })),
  }];
  
  return (
    <>
    <BackgroundImage>
      <div className="w-full h-full py-9 px-9">
        <div className='w-full mb-4'>
        <CourseHeader courseName={''} membersCount={0} completedCount={0} remainingCount={0} />
        </div>
       <div>
       <DataTable columns={columns} data={data} isVisible={false} />
       </div>
      </div>
    </BackgroundImage>
    </>
  )
}

export default CourseDetail;