import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";

interface Props {
  title: string;
  key1: string;
  key2: string;
  value1: string;
  value2: string;
}

export default function DashboardCard(props: Props) {
  const { title, key1, key2, value1, value2 } = props;

  return (
    <Card
      sx={{
        width: 300,
        backdropFilter: "blur(14px) saturate(134%)",
        WebkitBackdropFilter: "blur(14px) saturate(134%)",
        bordeRadius: "12px",
      }}
    >
      <CardHeader
        title={title}
        sx={{ textAlign: "center", textTransform: "uppercase" }}
      />
      <CardContent>
        <Typography color="text.secondary" textTransform="capitalize">
          {key1}: {value1}
        </Typography>
        <Typography color="text.secondary" textTransform="capitalize">
          {key2}: {value2}
        </Typography>
      </CardContent>
    </Card>
  );
}
