"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../../../../components/data-table-column-header"
import Button from "@/Components/Button"
import { useRouter } from "next/navigation"
// import { DataTableRowActions } from "./data-table-row-actions"

export type Group = {
    id: string;
    name: string;
    bannerImage: any;
    type: any;
    members: string,
};


export const columns: ColumnDef<Group>[] = [
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
        <DataTableColumnHeader column={column} title="Group Name" />
      ),
      cell: ({ row }) => (
        <div className=" truncate font-medium">
          {row.getValue("name")}
        </div>
      ),
    },
    {
      accessorKey: "bannerImage",
      // header: ({ column }) => (
      //   <DataTableColumnHeader column={column} title="Banner" />
      // ),
      cell: ({ row }) => (
        <img src={row.getValue("bannerImage")} alt="Banner" className="w-[100px] object-cover" />
      ),
    },
    {
      accessorKey: "type",
      // header: ({ column }) => (
      //   <DataTableColumnHeader column={column} title="Type" />
      // ),
      cell: ({ row }) => (
        <div className="max-w-[150px] truncate font-medium">
          {row.getValue("type")}
        </div>
      ),
    },
    {
      accessorKey: "members",
      // header: ({ column }) => (
      //   <DataTableColumnHeader column={column} title="Members" />
      // ),
      cell: ({ row }) => {
        console.log(row.original)
        return (
            <>
            <div className="w-[50px] text-center">
              {row.getValue("members")}
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

  const handleEdit = (rowData: Group) => {
    // Open modal, navigate to edit page, or handle your edit logic here
    console.log('Edit row:', rowData);
  };