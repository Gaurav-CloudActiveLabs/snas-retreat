import { getUserContext } from '@/lib/userContext';
import { ColumnDef } from '@tanstack/react-table';

import Table from '../../../components/ui/TablesName';
import { DataTable } from '@/components/data-table';
import { Post , columns } from './components/cloumns';
import CreateNew from '@/Components/CustomComponents/CreateNew';
import { BackgroundImage } from '@/Components/BackComponent';

type Props = {};

const Posts = async (props: Props) => {
  const userContext = await getUserContext();
  // console.log(`logged in user:`, userContext?.session?.itemId);

  // console.log('userContext', userContext?.prisma?.post.findMany);
  const posts = await userContext?.prisma?.post.findMany();

  const data: Post[] = posts.map((post) => ({
    id: post.id,
    createdBy: post.createdById,
    title: post.title,
    group: post.groupId,
    createdAt: post.createdAt,
    impressions: post.visibility,
    views: post.visibility,
    clicks: post.isFlagged
  }));

  console.log()


  return (
    <>
   <BackgroundImage>
      <div className="py-9 px-9">
        <div className='flex justify-end mb-4'>
        <CreateNew name='Posts' title='Create new Post' route='/posts/create' />
        </div>
      <DataTable columns={columns} data={data}  searchKey="title"
            placeholder="Posts" isVisible={true} />
      </div>
    </BackgroundImage>
    </>
  );
};

export default Posts;
