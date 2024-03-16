import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "date",
    headerName: "Issue Date",
    width: 150,
    // type: "date",
  },
  {
    field: "bookName",
    headerName: "Book name",
    width: 100,
    editable: false,
  },
  {
    field: "isbn",
    headerName: "ISBN NO",
    width: 90,
    description: "This column has a value getter and is not sortable.",
  },
  {
    field: "returnedDate",
    headerName: "Returned Date",
    // type: "date",
    width: 100,
  },
];

interface Props {
  rows: any;
}

export default function DataGridReturned({ rows }: Props) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      // checkboxSelection
      disableRowSelectionOnClick
    />
  );
}
