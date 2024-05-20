import { Menu, MenuItem } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { SquireButton } from "../../../../styled/HeaderStyled";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../../../../../App";
import * as _ from "lodash";

const categories = [
  {
    category_name: "Category1",
    subCategories: [
      { subcategory_id: 1, subcategory_name: "Cash Registers" },
      { subcategory_id: 2, subcategory_name: "Sub2" },
      { subcategory_id: 3, subcategory_name: "Sub3" },
      { subcategory_id: 4, subcategory_name: "Sub4" },
      { subcategory_id: 5, subcategory_name: "Sub5" },
    ],
  },
  {
    category_name: "Category2",
    subCategories: [
      { subcategory_id: 1, subcategory_name: "Cash Registers" },
      { subcategory_id: 2, subcategory_name: "Sub2" },
      { subcategory_id: 3, subcategory_name: "Sub3" },
    ],
  },
  {
    category_name: "Category3",
    subCategories: [
      { subcategory_id: 1, subcategory_name: "Cash Registers" },
      { subcategory_id: 2, subcategory_name: "Sub2" },
      { subcategory_id: 3, subcategory_name: "Sub3" },
      { subcategory_id: 4, subcategory_name: "Sub4" },
    ],
  },
];

export default function CategoryOptions() {
  const context = useContext(AppContext);
  const [categoryList, setCategoryList] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    // TODO: Add fetch of real data
    setCategoryList(categories);
  }, []);

  const onButtonClick = (event) => {
    setOpen(event.currentTarget);
  };

  const onCategoryClick = (category) => {
    context.handleSubCategoriesChange(category.subCategories);
    setOpen(null);
  };

  const onMenuClose = () => {
    setOpen(null);
  };

  return (
    <>
      <SquireButton
        startIcon={<MenuIcon />}
        variant="contained"
        onClick={onButtonClick}
        sx={{
          px: 5,
          py: 1,
        }}
      >
        Categories
      </SquireButton>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={onMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {categoryList.map((c, index) => (
          <MenuItem
            key={c.category_name + index}
            onClick={() => onCategoryClick(c)}
            sx={{ px: 6, py: 1 }}
          >
            {c.category_name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
