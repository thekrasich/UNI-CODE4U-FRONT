import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import UpgradedDataGrid from "../../UI/UpgradedDataGrid";
import DataGridSkeleton from "../../UI/Skeleton/DataGridSkeleton";

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchedOrders = [
      {
        status: "A",
      },
      {
        status: "B",
      },
      {
        status: "C",
      },
      {
        status: "A",
      },
      {
        status: "B",
      },
    ];

 
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setOrders(fetchedOrders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: 0, md: "24px 72px" },
        marginTop: { xs: "26px", md: "38px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Order List
      </Typography>

      {loading ? (
        <DataGridSkeleton />
      ) : (
        <UpgradedDataGrid list={orders} isEditable={false} />
      )}
    </Box>
  );
}
