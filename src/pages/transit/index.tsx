import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import Link from "next/link";

const Transit = () => {
  return (
    <Box>
      <Stack width="100%">
        <Typography variant="h2" textAlign="center" textTransform="uppercase">
          Transit-Go <DirectionsBusIcon fontSize="large" />
        </Typography>

        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi
          quidem dolor consequuntur magni facere, pariatur illum, suscipit, vel
          possimus doloribus exercitationem at ducimus ab incidunt aspernatur
          culpa. Deleniti nostrum officiis labore mollitia? Facilis earum
          excepturi ab cupiditate minus officia, a consequuntur dolorum dolore
          quibusdam nam voluptas modi, fugiat odio odit? Expedita esse rem natus
          fuga dolorem velit, nobis nostrum.
        </Typography>
      </Stack>

      <Divider sx={{ margin: "2rem 0" }} />

      <Stack gap={3}>
        <Typography textTransform="capitalize">
          Total rides purchased: 23{" "}
        </Typography>
        <Typography textTransform="capitalize">
          Total Rides taken : 15{" "}
        </Typography>
        <Typography textTransform="capitalize" fontWeight="bold">
          Rides Available: 8{" "}
        </Typography>
      </Stack>

      <Divider sx={{ margin: "2rem 0" }} />
      <Stack flexDirection="row" justifyContent="center">
        <Box>
          <Button variant="outlined" LinkComponent={Link} href="/wallet">
            Add rides
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Transit;
