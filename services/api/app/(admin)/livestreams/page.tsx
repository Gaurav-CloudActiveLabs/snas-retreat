import { BackgroundImage } from '@/Components/BackComponent';
import CreateNew from '@/Components/CustomComponents/CreateNew';
import { DataTable } from '@/components/data-table';
import { getUserContext } from '@/lib/userContext';
import React from 'react';
import type { Livestream } from './_components/columns';
import { columns } from './_components/columns'

type Props = {};

const Event = async (props: Props) => {
  const userContext = await getUserContext();

  const data = [
    {
      id: 1,
      eventDate: "13 July, 2021",
      streamer: "Jake Gyll",
      group: "Community",
      maxViews: 234,
      uniqueViews: 234,
      iosViews: 234,
      androidViews: 234,
      webViews: 23
    },
    {
      id: 2,
      eventDate: "13 July, 2021",
      streamer: "Jake Gyll",
      group: "Community",
      maxViews: 234,
      uniqueViews: 234,
      iosViews: 234,
      androidViews: 234,
      webViews: 23
    },
    // Add more livestreams as necessary
  ];

  return (
    <>
      <BackgroundImage>
        <div className="w-full h-full py-9 px-9">
          <div className="flex justify-end mb-4">
            <CreateNew
              name="Livestreams"
              title="Create Livestreams"
              route="/groups/create"
            />
          </div>
          <div>
            <DataTable columns={columns} data={data} isVisible={true} searchKey="name" placeholder="Livestreams" />
          </div>
        </div>
      </BackgroundImage>
    </>
  );
};

export default Event;
