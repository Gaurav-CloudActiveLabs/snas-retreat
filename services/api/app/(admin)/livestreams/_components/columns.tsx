"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../../components/data-table-column-header";
import { useRouter } from "next/navigation";
import moment from "moment";

export type Livestream = {
  id: number;
  eventDate: string;
  streamer: string;
  group: string;
  maxViews: number;
  uniqueViews: number;
  iosViews: number;
  androidViews: number;
  webViews: number;
};


export const columns: ColumnDef<Livestream>[] = [
  {
    accessorKey: "id",
    cell: ({ row }) => <div className="truncate">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "streamer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Streamer" />
    ),
    cell: ({ row }) => (
      <div className="truncate font-medium">
        {row.getValue("streamer")}
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
      return eventDate ? moment(eventDate).format("DD/MM/YYYY") : "No Date";
    },
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
    accessorKey: "maxViews",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Max Views" />
    ),
    cell: ({ row }) => <div className="truncate">{row.getValue("maxViews")}</div>,
  },
  {
    accessorKey: "uniqueViews",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unique Views" />
    ),
    cell: ({ row }) => (
      <div className="truncate">{row.getValue("uniqueViews")}</div>
    ),
  },
  {
    accessorKey: "iosViews",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="iOS Views" />
    ),
    cell: ({ row }) => <div className="truncate">{row.getValue("iosViews")}</div>,
  },
  {
    accessorKey: "androidViews",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Android Views" />
    ),
    cell: ({ row }) => (
      <div className="truncate">{row.getValue("androidViews")}</div>
    ),
  },
  {
    accessorKey: "webViews",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Web Views" />
    ),
    cell: ({ row }) => <div className="truncate">{row.getValue("webViews")}</div>,
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
