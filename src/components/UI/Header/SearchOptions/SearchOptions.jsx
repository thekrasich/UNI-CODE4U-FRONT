import { Stack } from "@mui/material";
import CategoryOptions from "./CategoryOptions";
import SearchBar from "./SearchBar";

export default function SearchOptions() {
  return (
    <Stack
      direction="row"
      sx={{ px: 9, py: 3, justifyContent: "space-between", gap: 5 }}
    >
      <CategoryOptions />
      <SearchBar />
    </Stack>
  );
}
