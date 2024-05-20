import { Grid } from "@mui/material";
import ProductSkeletonItem from "./ProductSkeletonItem/ProductSkeletonItem";

export default function ProductSkeleton() {
  const items = [...Array(8).keys()];
  return (
    <Grid container columnSpacing={2} rowSpacing={1}>
      {items.map((i) => (
        <Grid
          item
          key={i}
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
          <ProductSkeletonItem />
        </Grid>
      ))}
    </Grid>
  );
}
