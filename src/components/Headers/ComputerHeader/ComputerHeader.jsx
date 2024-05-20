import { Toolbar, Typography } from "@mui/material";
import NavigationOptions from "../../UI/Header/NavigationOptions";
import SearchOptions from "../../UI/Header/SearchOptions";
import HeaderIcons from "../../UI/Header/HeaderIcons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../App";

export default function ComputerHeader() {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const navigateToHome = () => {
    context.originalList = null;
    navigate("/");
  };

  return (
    <>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          onClick={navigateToHome}
          sx={{ cursor: "pointer" }}
        >
          Industrial West
        </Typography>
        <NavigationOptions />
        <HeaderIcons />
      </Toolbar>
    </>
  );
}
