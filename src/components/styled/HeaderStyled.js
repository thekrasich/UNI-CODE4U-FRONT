import {
  Autocomplete,
  Box,
  Button,
  Typography,
  TextField,
  styled,
  OutlinedInput,
} from "@mui/material";

export const AutocompleteFullWidth = styled(Autocomplete)({
  display: "flex",
  width: "100%",
});

export const SearchBarContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  paddingRight: 60,
});

export const SquireButton = styled(Button)({
  borderRadius: 0,
});

export const HeaderCenteredText = styled(Typography)({
  textAlign: "center",
  flexGrow: 1,
});

export const FlexGrowBox = styled(Box)({
  flexGrow: 1,
  display: "flex",
});

export const ModalItemBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  boxShadow: 24,
  padding: 30,
  backgroundColor: "#f1f1f1",
});
