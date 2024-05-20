import { Button, Stack } from "@mui/material";
import { HeaderCenteredText } from "../../../styled/HeaderStyled";
import PasswordInput from "../PasswordInput";
import FormInputField from "../FormInputField";

export default function SignUpModalPart({ switchForm }) {
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
        Sign up
      </HeaderCenteredText>
      <Stack direction="row" justifyContent="space-between">
        <FormInputField variant="outlined" label="Name" name="name" />
        <FormInputField variant="outlined" label="Surname" name="surname" />
      </Stack>
      <FormInputField label="Email" name="email" />
      <FormInputField label="Phone" name="phone" />
      <PasswordInput />
      <Button
        type="submit"
        variant="contained"
        sx={{ textTransform: "none" }}
      >
        Sign Up
      </Button>
      <Button
        variant="outlined"
        sx={{ textTransform: "none" }}
        onClick={switchForm}
      >
        I have an account
      </Button>
    </Stack>
  );
}
