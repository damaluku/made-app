import { Stack, Typography } from "@mui/material";
import DataGridCurrent from "components/DataGridCurrent";
import DataGridReturned from "components/DataGridReturned";
import React from "react";

const Library = () => {
  const current = [
    {
      id: 1,
      date: "14-3-2024",
      bookName: "The Early Days of the Computer",
      isbn: 126,
      dueDate: "26-3-2024",
    },
    {
      id: 2,
      date: "12-3-2024",
      bookName: "Evil Twin",
      isbn: 561,
      dueDate: "27-3-2024",
    },
    {
      id: 3,
      date: "16-3-2024",
      bookName: "The Early Days of the Computer",
      isbn: 794,
      dueDate: "28-3-2024",
    },
    {
      id: 4,
      date: "06-3-2024",
      bookName: "An Icon",
      isbn: 198,
      dueDate: "21-3-2024",
    },
  ];

  const returned = [
    {
      id: 1,
      date: "6-1-2024",
      bookName: "Google's Machinings",
      isbn: 612,
      returnedDate: "01-4-2024",
    },
    {
      id: 2,
      date: "10-1-2024",
      bookName: "The Rise and Fall of Theranos",
      isbn: 984,
      returnedDate: "01-4-2024",
    },
  ];

  return (
    <>
      <Stack rowGap={2}>
        <Typography variant="h3">Active</Typography>
        <DataGridCurrent rows={current} />
      </Stack>
      <br />
      <br />
      <Stack rowGap={2}>
        <Typography variant="h3">History</Typography>
        <DataGridReturned rows={returned} />
      </Stack>
    </>
  );
};

export default Library;
