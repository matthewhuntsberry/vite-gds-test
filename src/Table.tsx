import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { Table } from "@kofile/gds-react";
import { mockPeople } from "./mock";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

const TableTemplate = (props) => {
  const [data, setData] = React.useState(mockPeople);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns: [
      {
        header: "Id",
        accessorKey: "id",
        cell: (props) => <>{props.getValue()}</>,
      },
      {
        header: "Name",
        accessorKey: "name",
        cell: (props) => <>{props.getValue()}</>,
      },
      {
        header: "Username",
        accessorKey: "username",
        cell: (props) => <>{props.getValue()}</>,
      },
      {
        header: "Email",
        accessorKey: "email",
        cell: (props) => <>{props.getValue()}</>,
      },
    ],
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });
  return (
    <Table.Container className="h-96">
      <Table>
        <Table.Thead>
          <Table.Tr>
            {table.getHeaderGroups().map((headerGroup) => {
              return headerGroup.headers.map((header) => {
                return (
                  <Table.Th
                    // sticky={props.sticky}
                    // align={props.align}
                    // background={props.background}
                    {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    <span className="flex items-center gap-xs shrink-0">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <CaretUp weight="bold" size={20} />,
                        desc: <CaretDown weight="bold" size={20} />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </span>
                  </Table.Th>
                );
              });
            })}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Table.Tr striped>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Table.Td>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Td>
                  );
                })}
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </Table.Container>
  );
};

export default TableTemplate;
