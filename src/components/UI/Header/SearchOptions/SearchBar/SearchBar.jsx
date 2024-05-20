import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  AutocompleteFullWidth,
  SearchBarContainer,
  SquireButton,
} from "../../../../styled/HeaderStyled";
import { useContext, useState } from "react";
import { AppContext } from "../../../../../App";

export default function SearchBar() {
  const context = useContext(AppContext);
  const [search, setSearch] = useState("");

  const onButtonClick = () => {
    if (context.onMobileFilterClose) context.onMobileFilterClose();

    if (context.searchQuery === search) return;

    context.searchQuery = search;
    context.handleFilter();
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchBarContainer>
      <AutocompleteFullWidth
        sx={{ width: "100%" }}
        freeSolo
        disableClearable
        options={[]}
        renderInput={(params) => (
          <TextField
            sx={{ width: "100%" }}
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
              value: search,
              onChange: onInputChange,
            }}
          />
        )}
      />
      <SquireButton
        variant="outlined"
        sx={{ borderRadius: 0 }}
        onClick={onButtonClick}
      >
        <Search />
      </SquireButton>
    </SearchBarContainer>
  );
}
