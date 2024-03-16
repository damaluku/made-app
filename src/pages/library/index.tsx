import { Stack, Typography } from "@mui/material";
import DataGridCurrent from "components/DataGridCurrent";
import DataGridReturned from "components/DataGridReturned";
import React from "react";

const Library = () => {
  const current = [
    {
      id: 1,
      date: "14-3-2024",
      bookName: "Java Into",
      isbn: 126,
      dueDate: "26-3-2024",
    },
    {
      id: 2,
      date: "12-3-2024",
      bookName: "Java Into",
      isbn: 561,
      dueDate: "27-3-2024",
    },
    {
      id: 3,
      date: "16-3-2024",
      bookName: "Java Into",
      isbn: 794,
      dueDate: "28-3-2024",
    },
    {
      id: 4,
      date: "06-3-2024",
      bookName: "Java Into",
      isbn: 198,
      dueDate: "21-3-2024",
    },
  ];

  const returned = [
    {
      id: 1,
      date: "6-1-2024",
      bookName: "Java Into",
      isbn: 612,
      returnedDate: "01-4-2024",
    },
    {
      id: 2,
      date: "10-1-2024",
      bookName: "Java Into",
      isbn: 984,
      returnedDate: "01-4-2024",
    },
  ];

  return (
    <>
      <Stack>
        <Typography variant="h3">Current</Typography>
        <DataGridCurrent rows={current} />
      </Stack>
      <br />
      <Stack>
        <Typography variant="h3">History</Typography>
        <DataGridReturned rows={returned} />
      </Stack>
    </>
  );
};

export default Library;
