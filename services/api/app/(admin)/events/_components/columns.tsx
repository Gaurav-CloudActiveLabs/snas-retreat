"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../../../../components/data-table-column-header"
import Button from "@/Components/Button"
import { useRouter } from "next/navigation"
import moment from "moment"
// import { DataTableRowActions } from "./data-table-row-actions"

export type Event = {
    id: string;
    name: string;
    eventDate: Date;
    location: string;
    group: any;
};


export const columns: ColumnDef<Event>[] = [
    {
      accessorKey: "id",
      // header: ({ column }) => (
      //   <DataTableColumnHeader column={column} title="ID" />
      // ),
      cell: ({ row }) => <div className="truncate">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Titles" />
      ),
      cell: ({ row }) => (
        <div className=" truncate font-medium">
          {row.getValue("name")}
        </div>
      ),
    },
    {
        accessorKey: "eventDate",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Date & time" />
        ),
        cell: ({ row }) => {
            const eventDate = row.getValue("eventDate") as string | Date | null;
    
    return eventDate ? moment(eventDate).format('DD/MM/YYYY') : 'No Date';
        },
      },      
      
    {
      accessorKey: "location",
      // header: ({ column }) => (
      //   <DataTableColumnHeader column={column} title="Type" />
      // ),
      cell: ({ row }) => (
        <div className="max-w-[150px] truncate font-medium">
          {row.getValue("location")}
        </div>
      ),
    },
    {
      accessorKey: "group",
      // header: ({ column }) => (
      //   <DataTableColumnHeader column={column} title="Members" />
      // ),
      cell: ({ row }) => {
        console.log(row.original)
        const Group = row.original.group.name;
        return (
            <>
            <div className="w-[50px] text-center">
              {Group}
            </div>
           </>
        )
      }
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const router = useRouter()
          const rowData = row.original; 
          return (
            <div className="flex space-x-2">
              <div  
                onClick={() => router.push(`groups/${row.original.id}`)} 
                className="flex items-center"
              >
                <img src="/images/edit.svg" alt="edit" width="25" height="25" className='' />

            </div>
            </div>
          );
        },
      },
  ];

  const handleEdit = (rowData: Event) => {
    // Open modal, navigate to edit page, or handle your edit logic here
    console.log('Edit row:', rowData);
  };