import { Box, Stack, Typography } from "@mui/material";
import { HeaderCenteredText } from "../../../styled/HeaderStyled";
import SubcategoriesItem from "./SubcategoryItem";

export default function Subcategories({ subcategories }) {
  const List = () =>
    subcategories.map((s, index) => (
      <SubcategoriesItem
        key={s.subcategory_name + index}
        name={s.subcategory_name}
        label={s.subcategory_name}
      />
    ));
  return (
    <Box>
      <HeaderCenteredText fontSize={22}>Subcategories</HeaderCenteredText>
      <Stack px={4} sx={{ mt: 3 }}>
        {subcategories ? (
          <List />
        ) : (
          <HeaderCenteredText fontSize={16} mt={2}>
            No category selected
          </HeaderCenteredText>
        )}
      </Stack>
    </Box>
  );
}
