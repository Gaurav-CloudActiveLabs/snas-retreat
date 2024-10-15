"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../../../../components/data-table-column-header"
import Button from "@/Components/Button"
import { useRouter } from "next/navigation"
import moment from "moment"
// import { DataTableRowActions } from "./data-table-row-actions"

export type Member = {
    id: string;
    name: string,
    email: string,
    createdAt: string,
};


export const columns: ColumnDef<Member>[] = [
    {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    // cell: ({ row }) => (
    //   <Checkbox
    //     checked={row.getIsSelected()}
    //     onCheckedChange={(value) => row.toggleSelected(!!value)}
    //     aria-label="Select row"
    //     className="translate-y-[2px]"
    //   />
    // ),
    enableSorting: false,
    enableHiding: false,
  },
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
        <DataTableColumnHeader column={column} title="Member" />
      ),
      cell: ({ row }) => (
        <div className=" truncate font-medium">
          {row.getValue("name")}
        </div>
      ),
    },
    {
        accessorKey: "email",
        // header: ({ column }) => (
        //   <DataTableColumnHeader column={column} title="Type" />
        // ),
        cell: ({ row }) => (
          <div className="max-w-[150px] truncate font-medium">
            {row.getValue("email")}
          </div>
        ),
      },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Date & time" />
        ),
        cell: ({ row }) => {
            const createdAt = row.getValue("createdAt") as string | Date | null;
    
    return createdAt ? moment(createdAt).format('DD/MM/YYYY') : 'No Date';
        },
      },      
    {
        id: 'actions',
        cell: ({ row }) => {
            const router = useRouter()
          const rowData = row.original; 
          return (
            <div className="flex space-x-2">
              <div  
                onClick={() => router.push(`members/${row.original.id}`)} 
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