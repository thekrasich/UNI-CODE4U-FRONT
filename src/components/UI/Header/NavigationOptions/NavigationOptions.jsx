import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeaderOptions({ handleClose, ...props }) {
  const navigate = useNavigate();

  //TODO: use this func to close menu when button is pressed
  const closeMenu = () => {
    if (handleClose) {
      handleClose();
    }
  };
  const navigateToItemList = () => {
    closeMenu();
    navigate("/item-list");
  };

  return (
    <Box sx={{ ...props }}>
      <Button color="inherit" onClick={navigateToItemList}>
        List of Items
      </Button>
      <Button color="inherit" onClick={closeMenu}>
        Services
      </Button>
      <Button color="inherit" onClick={closeMenu}>
        About us
      </Button>
      <Button color="inherit" onClick={closeMenu}>
        Blog
      </Button>
      <Button color="inherit" onClick={closeMenu}>
        Contacts
      </Button>
    </Box>
  );
}
