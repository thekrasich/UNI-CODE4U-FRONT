import React, { useContext, useEffect, useState } from "react";
import ProductSkeleton from "../../UI/Skeleton/ProductLoadingSkeleton/ProductSkeleton";
import GridOfItems from "./GridOfItems/GridOfItems";
import { Box, Paper, Stack } from "@mui/material";
import Notification from "../../UI/Common/Notification";
import Filter from "../../UI/Filter/Filter";
import SearchOptions from "../../UI/Header/SearchOptions";
import MobileFilter from "../../UI/Filter/MobileFilter";
import { AppContext } from "../../../App";
import { BACK_END_URL } from "../../../constants";

export default function ItemList() {
  const context = useContext(AppContext);
  const [items, setItems] = useState([]);

  const handleFilter = (paramList) => {
    if (paramList) {
      setItems(paramList);
      return;
    }
    let list = context.originalList;
    if (context.searchQuery) {
      list = list.filter((i) => i.productName.includes(context.searchQuery));
    }
    if (context.selectedSubCategories) {
      list = list.filter((i) =>
        context.selectedSubCategories.includes(i.subcategory)
      );
    }
    setItems(list);
  };

  context.handleFilter = handleFilter;

  useEffect(() => {
    fetch(`${BACK_END_URL}Product`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box>
      <Paper
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <SearchOptions />
      </Paper>

      <MobileFilter />

      <Stack direction="row">
        {items !== null ? (
          <>
            <GridOfItems items={items} />
            <Box
              sx={{
                ml: 3,
                width: {
                  xs: 0,
                  md: 530,
                },
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Filter />
            </Box>
          </>
        ) : (
          <ProductSkeleton />
        )}
      </Stack>
      <Notification />
    </Box>
  );
}
