"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../../components/data-table-column-header";
import { useRouter } from "next/navigation";
import moment from "moment";
import { Checkbox } from "@/components/ui/checkbox";

export type Moderation = {
    id: number,
    status: string,
    type: string,
    group: string,
    offender: string,
    reason: string,
    no: number,
    firstReported: string,
};


export const columns: ColumnDef<Moderation>[] = [
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
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div className="truncate font-medium">
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => (
        <div className="truncate font-medium">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "group",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Group" />
    ),
    cell: ({ row }) => (
      <div className="truncate font-medium">{row.getValue("group")}</div>
    ),
  },
  {
    accessorKey: "group",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Group" />
    ),
    cell: ({ row }) => <div className="truncate">{row.getValue("group")}</div>,
  },
  {
    accessorKey: "offender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Offender" />
    ),
    cell: ({ row }) => (
      <div className="truncate">{row.getValue("offender")}</div>
    ),
  },
  {
    accessorKey: "reason",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reason" />
    ),
    cell: ({ row }) => <div className="truncate">{row.getValue("reason")}</div>,
  },
  {
    accessorKey: "no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" />
    ),
    cell: ({ row }) => (
      <div className="truncate">{row.getValue("no")}</div>
    ),
  },
  {
    accessorKey: "firstReported",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Reported" />
    ),
    cell: ({ row }) => <div className="truncate">{row.getValue("firstReported")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const router = useRouter();
      const rowData = row.original;

      return (
        <div className="flex space-x-2">
          <div
            onClick={() => router.push(`groups/${row.original.id}`)}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/images/edit.svg"
              alt="edit"
              width="25"
              height="25"
              className=""
            />
          </div>
        </div>
      );
    },
  },
];
