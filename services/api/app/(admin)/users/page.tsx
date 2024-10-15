import { getAuthenticateUserDetail } from '@/lib/actions/auth.action';
import { ctx } from '@/lib/ctx';
import { ColumnDef } from '@tanstack/react-table';
import { Suspense } from 'react';

import Table from '../../../components/ui/TablesName';

export type Person = {
  id: string;
  name: string;
  email: string;
  employmentStatus: string;
  subRows?: Person[];
};

type Props = {};

// Async Users component
const Users = async (props: Props) => {
  // Fetch users from Prisma
  const user = await getAuthenticateUserDetail();
  if (!user?.id) {
    return;
    // redirect('/admin/signin');
  }
  // console.log(user)
  const ctxu = ctx.withSession({
    listKey: 'User',
    itemId: user.id,
    data: user,
  });
  // console.log('user tests', await ctxu.sudo().db.User.findMany());

  const users = await ctx.prisma.user.findMany();

  // Map Prisma users to match Person type structure

  const data: Person[] = users.map((user) => ({
    name: user.name,
    id: String(user.id),
    email: String(user.email),
    employmentStatus: user.employmentStatus,
  }));

  const columns: ColumnDef<Person, any>[] = [
    {
      header: 'Id',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Employment Status',
      accessorKey: 'employmentStatus',
    },
  ];

  return (
    <>
      {/* <Suspense fallback={<p>Loading users...</p>}>
        <div>
          {users.map((user, index) => (
            <div key={index}>
              {user.name} - Id: {user.id}, Email: {user.email}, {user?.employmentStatus}
            </div>
          ))}
        </div>
      </Suspense> */}
      <div className="w-full">
        <Table formattedUsers={data} columns={columns} />
      </div>
    </>
  );
};

export default Users;
