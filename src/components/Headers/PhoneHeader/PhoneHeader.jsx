import { Toolbar } from "@mui/material";
import DrawerNavigation from "../../UI/Header/DrawerNavigation";
import HeaderIcons from "../../UI/Header/HeaderIcons";
import { FlexGrowBox, HeaderCenteredText } from "../../styled/HeaderStyled";
import { useNavigate } from "react-router-dom";

export default function PhoneHeader() {
  const navigate = useNavigate();

  return (
    <Toolbar sx={{ justifyContent: "space-between", py: 4 }}>
      <FlexGrowBox sx={{ justifyContent: "start" }}>
        <DrawerNavigation />
      </FlexGrowBox>

      <HeaderCenteredText
        variant="h4"
        component="div"
        sx={{
          fontSize: 22,
          fontWeight: "bold",
          px: 2,
          justifyContent: "end",
          display: "flex",
        }}
        onClick={() => navigate("/")}
      >
        Industrial West
      </HeaderCenteredText>
      <FlexGrowBox sx={{ justifyContent: "end" }}>
        <HeaderIcons />
      </FlexGrowBox>
    </Toolbar>
  );
}
