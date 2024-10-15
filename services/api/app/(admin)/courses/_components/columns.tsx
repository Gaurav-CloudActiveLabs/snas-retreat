"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "../../../../components/data-table-column-header"
import Button from "@/Components/Button"
import { useRouter } from "next/navigation"

export type Course = {
    id: string;
    title: string;
    description: string;
    status: any;
};

export const columns: ColumnDef<Course>[] = [
  
    {
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Course Name" />
      ),
      cell: ({ row }) => {
        const router = useRouter()
        return (
          <div className=" truncate font-medium" onClick={() => router.push(`course-detail/${row.original.id}`)} >
          {row.getValue("title")}
        </div>
        )
      }
    },
    {
      accessorKey: "description",
      // header: ({ column }) => (
      //   <DataTableColumnHeader column={column} title="Description" />
      // ),
      cell: ({ row }) => (
        <div className=" truncate font-medium">
          {row.getValue("description")}
        </div>
      ),
    },
    {
      accessorKey: "status",
      // header: ({ column }) => (
      //   <DataTableColumnHeader column={column} title="ID" />
      // ),
      cell: ({ row }) => <div className="truncate">{row.getValue("status")}</div>,
    },
    {
        id: 'actions',
        cell: ({ row }) => {
          const rowData = row.original; 
          const router = useRouter()
          return (
            <div className="flex space-x-2">
              <div  
                onClick={() => router.push(`courses/${row.original.id}`)} 
                className="flex items-center"
              >
                <img src="/images/edit.svg" alt="edit" width="25" height="25" className='' />

            </div>
            </div>
          );
        },
      },
  ];

  const handleEdit = (rowData: Course) => {
    // Open modal, navigate to edit page, or handle your edit logic here
    console.log('Edit row:', rowData);
  };