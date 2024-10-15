import { BackgroundImage } from '@/Components/BackComponent';
import CreateNew from '@/Components/CustomComponents/CreateNew';
import { DataTable } from '@/components/data-table';
import React from 'react'
import type { Moderation } from './_components/columns';
import { columns } from './_components/columns'

type Props = {}

const Moderation = (props: Props) => {

    const data = [
        {
          id: 1,
          status: "open",
          type: "post",
          group: "Community",
          offender: "Shuvette m",
          reason: "Last Seen 20 mins ago",
          no: 1,
          firstReported: "10 days ago",
        },
        {
            id: 2,
            status: "open",
            type: "post",
            group: "Community",
            offender: "Shuvette m",
            reason: "Last Seen 20 mins ago",
            no: 1,
            firstReported: "10 days ago",
        },
        // Add more livestreams as necessary
      ];
  return (
   <>
   <BackgroundImage>
        <div className="w-full h-full py-9 px-9">
          <div className="flex justify-end mb-4">
            <CreateNew
              name="Moderation"
              title="Create Moderation"
              route="/groups/create"
            />
          </div>
          <div>
            <DataTable columns={columns} data={data} isVisible={false} />
          </div>
        </div>
      </BackgroundImage>
   </>
  )
}

export default Moderation;