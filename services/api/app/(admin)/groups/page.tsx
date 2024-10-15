import { BackgroundImage } from '@/Components/BackComponent';
import CreateNew from '@/Components/CustomComponents/CreateNew';
import { DataTable } from '@/components/data-table';
import { getUserContext } from '@/lib/userContext';
import React from 'react'
import type { Group } from './_components/columns';
import { columns } from './_components/columns'

type Props = {}

const Group = async (props: Props) => {
  
  const userContext = await getUserContext();
  const groups = await userContext?.query.Group.findMany({
    query: `
      id 
      name 
      bannerImage 
      type 
      groupMembers { 
        id 
        user { 
          id 
          firstName 
          lastName 
        } 
      } 
      visibility 
    `
  })
  

  const data: Group[] = groups.map((group) => ({
    id: group.id,
    name: group.name,
    bannerImage: group.bannerImage,
    type: group.type,
    members: group.groupMembers.map((member: { user: { firstName: string; }; }) => member.user.firstName).join(', '),
  }));
  

  
  return (
   <>
    <BackgroundImage>
      <div className="w-full h-full py-9 px-9">
        <div className='flex justify-end mb-4'>
        <CreateNew name='Groups' title='Create new Group' route='/groups/create' />
        </div>
       <div>
       <DataTable columns={columns} data={data} isVisible={false} />
       </div>
      </div>
    </BackgroundImage>
   </>
  )
}

export default Group;