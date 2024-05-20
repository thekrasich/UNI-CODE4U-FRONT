import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../../App";

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
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // TODO: Add fetch of real data
    setCategoryList(categories);
  }, []);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onCategoryClick = (category) => {
    context.handleSubCategoriesChange(category.subCategories);
    setExpanded(false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleAccordionChange("panel1")}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography fontSize={14} ml={3}>
            CATEGORIES
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ justifyContent: "center" }}>
          <Box display="flex" flexDirection="column">
            {categoryList.map((category, index) => (
              <MenuItem
                key={index}
                onClick={() => onCategoryClick(category)}
                sx={{
                  px: 6,
                  py: 1,
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                {category.category_name}
              </MenuItem>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
