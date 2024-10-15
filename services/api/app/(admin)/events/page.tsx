import { BackgroundImage } from '@/Components/BackComponent';
import CreateNew from '@/Components/CustomComponents/CreateNew';
import { DataTable } from '@/components/data-table';
import { getUserContext } from '@/lib/userContext';
import React from 'react';

import type { Event } from './_components/columns';
import { columns } from './_components/columns'

type Props = {};

const Event = async (props: Props) => {
  const userContext = await getUserContext();
  const events = await userContext?.query.Event.findMany({
    query: `
    id
    name
    eventDate
    group {
      id
      name
    }
    location
    `,
  });

  const data : Event[] = events.map((event) => ({
    id: event.id,
    name: event.name,
    eventDate: event.eventDate,
    location: event.location,
    group: event.group.name
  }));

  return (
    <>
      <BackgroundImage>
        <div className="w-full h-full py-9 px-9">
          <div className="flex justify-end mb-4">
            <CreateNew
              name="Events"
              title="Create event"
              route="/events/create"
            />
          </div>
          <div>
            <DataTable columns={columns} data={data} isVisible={true}  searchKey="name"
            placeholder="Events" />
          </div>
        </div>
      </BackgroundImage>
    </>
  );
};

export default Event;
