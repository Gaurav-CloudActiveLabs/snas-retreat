"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../../components/data-table-column-header";
import { useRouter } from "next/navigation";

export type CourseDetail = {
  id: string;
  lessons: {
    id: string;
    title: string;
    status: string;
  }[];  // Notice the '[]' to make it an array of lessons
};


export const columns: ColumnDef<CourseDetail>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <div
          className="truncate font-medium"
          onClick={() => router.push(`courses/${row.original.id}`)}
        >
          {row.getValue("id")}
        </div>
      );
    },
  },
  {
    accessorKey: `lessons`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const lessons = row.original.lessons;
      const lessonTitles = lessons.map((lesson) => lesson.title).join(", ");

      return (
        <div className="truncate font-medium">
          {lessonTitles}
        </div>
      );
    },
  },
  {
    accessorKey: "lessons",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    // Custom cell function to display lesson statuses
    cell: ({ row }) => {
      const lessons = row.original.lessons;
      const lessonStatuses = lessons.map((lesson) => lesson.status).join(", ");  // Join statuses into a string

      return (
        <div className="truncate font-medium">
          {lessonStatuses}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <div className="flex space-x-2">
          <div
            onClick={() => router.push(`courses/${row.original.id}`)}
            className="flex items-center"
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

const handleEdit = (rowData: CourseDetail) => {
  // Edit logic here
  console.log("Edit row:", rowData);
};
