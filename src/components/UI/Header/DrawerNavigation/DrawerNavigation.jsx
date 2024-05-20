import { useState } from "react";
import { IconButton, Drawer, Typography, Stack, Divider } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import NavigationOptions from "../NavigationOptions";

export default function DrawerNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton color="inherit" aria-label="menu" onClick={handleOpen}>
          <Menu />
        </IconButton>
        <Drawer anchor="left" open={isOpen} onClose={handleClose}>
          <Stack sx={{ padding: "16px" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">Menu</Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Stack>
            <Divider sx={{ my: "16px" }} />
            <NavigationOptions
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="space-between"
              ml={"35px"}
              mr={"35px"}
              handleClose={handleClose}
            />
          </Stack>
        </Drawer>
      </Stack>
    </>
  );
}
