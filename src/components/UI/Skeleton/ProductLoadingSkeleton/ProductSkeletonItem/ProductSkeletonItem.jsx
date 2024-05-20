import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Stack,
} from "@mui/material";
import { StyledCardContent } from "../../../../styled/Content";

export default function ProductSkeletonItem() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        mt: 4,
      }}
    >
      <Box
        sx={{
          height: 280,
          p: 1.5,
        }}
      >
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
      <StyledCardContent sx={{ position: "relative" }}>
        <CardContent>
          <Stack gap={1}>
            <Skeleton height={25} />
            <Box>
              <Skeleton />
              <Skeleton />
            </Box>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            padding: 0,
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <Skeleton width="100%" height={50} />
        </CardActions>
      </StyledCardContent>
    </Card>
  );
}
