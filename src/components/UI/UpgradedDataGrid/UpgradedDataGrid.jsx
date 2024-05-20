import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import _ from "lodash";

export default function UpgradedDataGrid({ list, isEditable }) {
  console.log(list);
  const columns = [
    { field: "index", headerName: "Index", width: 100 },
    ...Object.keys(list[0]).map((key) => ({
      field: key,
      headerName: _.startCase(key),
      width: 200,
      editable: isEditable,
    })),
  ];

  const rows = list.map((item, index) => ({
    id: index,
    index: index + 1,
    ...item,
  }));

  return (
    <Box
      sx={{
        minWidth: "90%",
        maxWidth: "95%",
        "& .MuiDataGrid-cell": {
          backgroundColor: "rgba(252, 252, 252, 0.8)",
        },
        "& .MuiDataGrid-columnHeader, .MuiDataGrid-filler": {
          backgroundColor: "rgba(210, 210, 210, 0.8)",
        },
      }}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        autoHeight
        disableColumnMenu
        disableColumnSelector
        disableSelectionOnClick
      />
    </Box>
  );
}
