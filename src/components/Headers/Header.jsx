import { AppBar, useMediaQuery } from "@mui/material";
import ComputerHeader from "./ComputerHeader";
import { theme } from "../../styles/theme";
import PhoneHeader from "./PhoneHeader/PhoneHeader";

export default function Header() {
  const { breakpoints } = theme;
  const isFullSize = useMediaQuery(breakpoints.up("md"));

  return (
    <AppBar position="fixed" color="light">
      {isFullSize ? <ComputerHeader /> : <PhoneHeader />}
    </AppBar>
  );
}
