import { ctx } from '@/lib/ctx';
import { Suspense } from 'react';

export default async function ({}) {
  const users = await ctx.prisma.user.findMany();
  return (
    <Suspense fallback={<p>Loading users...</p>}>
      <div>{users?.map((user) => <div key={user.id}>{user.name}</div>)}</div>
    </Suspense>
  );
}
