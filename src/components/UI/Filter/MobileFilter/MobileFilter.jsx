import { useContext, useState } from "react";
import { Tune, Close } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Drawer,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import SearchBar from "../../Header/SearchOptions/SearchBar";
import Filter from "../Filter";
import MobileCategoryOptions from "../../Header/SearchOptions/MobileCategoryOptions";
import { AppContext } from "../../../../App";

export default function MobileFilter() {
  const context = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  context.onMobileFilterClose = handleClose;

  return (
    <Stack
      flexBasis="1 1"
      alignItems="flex-end"
      sx={{
        mt: 4,
        display: { xs: "flex", md: "none" },
      }}
    >
      <Button
        variant="outlined"
        color="primary"
        aria-label="menu"
        onClick={handleOpen}
      >
        <Typography
          sx={{ textTransform: "none", fontWeight: "bold", marginRight: 1 }}
        >
          Filter
        </Typography>
        <Tune />
      </Button>

      <Drawer anchor="right" open={isOpen} onClose={handleClose}>
        <Paper sx={{ width: "80vw", padding: "16px" }}>
          <Stack gap={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Search</Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Stack>

            <SearchBar />

            <MobileCategoryOptions />

            <Filter />
          </Stack>
        </Paper>
      </Drawer>
    </Stack>
  );
}
