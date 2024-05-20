import { Button, Stack } from "@mui/material";
import { HeaderCenteredText } from "../../../styled/HeaderStyled";
import PasswordInput from "../PasswordInput";
import FormInputField from "../FormInputField";

export default function LogInModalPart({ switchForm }) {
  return (
    <Stack direction="column" gap={2}>
      <HeaderCenteredText
        sx={{
          fontSize: {
            xs: 30,
            md: 35,
            xl: 40,
          },
        }}
      >
        Log In
      </HeaderCenteredText>
      <FormInputField label="Email" name="email" />
      <PasswordInput />
      <Button
        type="submit"
        variant="contained"
        sx={{ textTransform: "none" }}
      >
        Log In
      </Button>
      <Button
        variant="outlined"
        sx={{ textTransform: "none" }}
        onClick={switchForm}
      >
        I am new on website
      </Button>
    </Stack>
  );
}
