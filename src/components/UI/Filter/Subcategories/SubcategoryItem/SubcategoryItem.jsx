import { Checkbox, FormControlLabel } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../../../../../App";

export default function SubcategoriesItem({ name, label }) {
  const { selectedSubCategories } = useContext(AppContext);

  const isChecked =
    selectedSubCategories !== null && selectedSubCategories.includes(name);

  const [checked, setChecked] = useState(isChecked);

  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      }
      label={label}
    />
  );
}
