import { BackgroundImage } from '@/Components/BackComponent';
import CreateNew from '@/Components/CustomComponents/CreateNew';
import { DataTable } from '@/components/data-table';
import { getUserContext } from '@/lib/userContext';
import React from 'react';
import type { Member } from './_components/columns';
import { columns } from './_components/columns'

type Props = {};

const Members = async (props: Props) => {
  const userContext = await getUserContext();
  const members = await userContext?.query.User.findMany({
    query: `
       id
    firstName
    lastName
    email
    createdAt
        `,
  });

  const data : Member[]  = members.map((member) => ({
    id: member.id,
    name: member.firstName + member.lastName,
    email: member.email,
    createdAt: member.createdAt,
  }));


  return (
    <>
      <BackgroundImage>
        <div className="py-9 px-9">
          <div className="flex justify-end mb-4">
            <CreateNew name="Members" title="Invite" route="/posts/create" />
          </div>
          <DataTable columns={columns} data={data}  searchKey="name"
            placeholder="Members" isVisible={true} />
        </div>
      </BackgroundImage>
    </>
  );
};

export default Members;
