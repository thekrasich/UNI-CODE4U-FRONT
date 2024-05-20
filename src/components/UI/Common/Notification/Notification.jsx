import { Alert, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../../../../App";

export default function Notification() {
  const context = useContext(AppContext);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleMessage = (message) => {
    setSnackMessage(message);
    setSnackOpen(true);
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  context.handleSnackMessage = handleMessage;

  return (
    <Snackbar
      open={snackOpen}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={handleClose} severity={"success"} sx={{ width: "100%" }}>
        {snackMessage}
      </Alert>
    </Snackbar>
  );
}
