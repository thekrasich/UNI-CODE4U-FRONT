import { Person, ShoppingBag } from "@mui/icons-material";
import { Divider, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../../../../App";
import UserOptionsPopover from "../UserOptions/UserOptionsPopover";

export default function HeaderIcons() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const navigateToCart = () =>{
    navigate("/cart");
  }

  const { onModalOpen } = useContext(AppContext);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      <IconButton
        color="inherit"
        onClick={isAuthorized ? handleClick : onModalOpen}
      >
        <Person />
      </IconButton>
      <Divider orientation="vertical" variant="inset" flexItem />
      <IconButton color="inherit" onClick={navigateToCart}>
        <ShoppingBag />
      </IconButton>
      <UserOptionsPopover anchorEl={anchorEl} handleClose={handleClose} />
    </Stack>
  );
}
