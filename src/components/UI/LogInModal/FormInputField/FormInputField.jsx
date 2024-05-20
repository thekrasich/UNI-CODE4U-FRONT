import { TextField } from "@mui/material";
import { useField } from "formik";

export default function FormInputField({ name, ...otherProps }) {
  const [field, meta] = useField(name);
  return (
    <TextField
      {...field}
      {...otherProps}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ""}
    />
  );
}
