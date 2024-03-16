import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Box, Grid, Stack, Typography } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import SimpleAreaChart from "components/SimpleAreaChart";
import BasicLineChart from "components/BasicLineChart";
import BasicScatter from "components/BasicScatter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Typography variant="h2" textTransform="uppercase" marginBottom={4}>
        John Carter
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        paddingBottom={2}
      >
        <Grid item xs={12} sm={4} md={4}>
          <DashboardCard
            title="Library"
            key1="Times Visited"
            key2="books used"
            value1={`${7}`}
            value2={`${5}`}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <DashboardCard
            title="Transit-Go"
            key1="Student pass"
            key2="rides available"
            value1="active"
            value2={`${8}`}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <DashboardCard
            title="Attendance"
            key1="Attended"
            key2="Absent"
            value1={`${5}`}
            value2={`${1}`}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        paddingBottom={2}
      >
        <Grid item xs={12} sm={6}>
          <BasicLineChart />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SimpleAreaChart />
        </Grid>
      </Grid>
    </>
  );
}
