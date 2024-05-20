import { Grid, Typography } from "@mui/material";
import GridItem from "../GridItem/GridItem";

export default function GridOfItems({ items }) {
  return items.length > 0 ? (
    <Grid container columnSpacing={2} rowSpacing={1} mb={3}>
      {items.map((i) => (
        <Grid
          item
          key={i.id}
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <GridItem item={i} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography
      variant="h2"
      sx={{
        margin: "auto",
        fontSize: {
          xs: 40,
          lg: 60,
        },
        mt: {
          xs: 3,
          md: "auto",
        },
      }}
    >
      No items found
    </Typography>
  );
}
