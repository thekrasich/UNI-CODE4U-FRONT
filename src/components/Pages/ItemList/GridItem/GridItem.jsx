import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { StyledCardContent } from "../../../styled/Content";
import ItemStock from "../Item/ItemStock";
import ItemCharasteristics from "../Item/ItemCharasteristics";
import { AddShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../App";
import { BACK_END_URL } from "../../../../constants";

export default function GridItem({ item }) {
  const [photoPath, setPhotoPath] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/item/${item.id}`);
  };
  const handleBuy = () => {
    context.handleSnackMessage(`Item "${item.name}" was added to cart.`);
  };

  useEffect(() => {
    fetch(`${BACK_END_URL}Photo/by-product/${item.id}`)
      .then((res) => res.json())
      .then((data) => setPhotoPath(data[0].path));

    fetch(`${BACK_END_URL}SubSubcategory/${item.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setSubcategory(data);
      });

    fetch(`${BACK_END_URL}Category/${item.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        mt: 4,
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1.5,
        }}
        onClick={handleNavigation}
      >
        <CardMedia
          component="img"
          height={240}
          image={photoPath}
          sx={{
            display: "flex",
            alignItems: "center",
            objectFit: "contain",
          }}
        />
      </Box>
      <StyledCardContent sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 12,
          }}
        >
          <ItemStock available_count={item.availableCount} />
        </Box>
        <CardContent onClick={handleNavigation}>
          <Stack gap={1}>
            <Typography variant="h6">{item.name}</Typography>
            <ItemCharasteristics
              subcategory={subcategory.name}
              category={category.name}
            />
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            padding: 0,
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <Button
            onClick={handleBuy}
            variant="contained"
            endIcon={<AddShoppingCart />}
            sx={{ width: "100%" }}
          >
            {item.price}
          </Button>
        </CardActions>
      </StyledCardContent>
    </Card>
  );
}
