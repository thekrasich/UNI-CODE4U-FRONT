import { Button, Paper, Stack } from "@mui/material";
import { HeaderCenteredText } from "../../styled/HeaderStyled";
import { useContext, useState } from "react";
import { AppContext } from "../../../App";
import Subcategories from "./Subcategories";

export default function Filter() {
  const context = useContext(AppContext);

  const [subcategories, setSubcategories] = useState(null);

  const handleSubCategoriesChange = (newSubcategories) => {
    setSubcategories(newSubcategories);
  };

  context.handleSubCategoriesChange = handleSubCategoriesChange;

  const onMenuClose = () => {
    if (context.onMobileFilterClose) context.onMobileFilterClose();
  };
  const applyFilter = (e) => {
    e.preventDefault();
    onMenuClose();
    const data = new FormData(e.target);
    const filter = Object.fromEntries(data.entries());
    const selectedSubCategories = Object.keys(filter);
    context.selectedSubCategories = selectedSubCategories.length
      ? selectedSubCategories
      : null;
    context.handleFilter();
  };

  const clearFilter = () => {
    onMenuClose();
    context.selectedSubCategories = null;
    context.searchQuery = "";
    context.handleFilter(context.originalList);
    setSubcategories(null);
  };

  return (
    <Paper
      sx={{
        mt: {
          xs: 4,
          sm: 2,
          md: 4,
        },
      }}
    >
      <form onSubmit={applyFilter}>
        <Stack direction="column" gap={3}>
          <HeaderCenteredText mt={3} fontSize={26}>
            Filter
          </HeaderCenteredText>
          <Subcategories subcategories={subcategories} />
          <Stack gap={1} p={2}>
            <Button type="submit" variant="contained">
              Apply
            </Button>
            <Button variant="outlined" onClick={clearFilter}>
              Clear
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
}
