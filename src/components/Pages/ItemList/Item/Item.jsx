import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import ItemPhoto from "./ItemPhoto";
import ItemStock from "./ItemStock";
import ItemButton from "./ItemButton";
import ItemDescription from "./ItemDescription";
import ItemCharasteristics from "./ItemCharasteristics";
import ItemSkeleton from "../../../UI/Skeleton/ItemSkeleton";
import { BACK_END_URL } from "../../../../constants";

export default function Item() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [photo, setPhoto] = useState({});
  const [subcategory, setSubcategory] = useState({});
  const [category, setCategory] = useState({});

  const [loading, setLoading] = useState(true);
  const [bought, setBought] = useState(false);

  // Parameter from URL
  const { id } = useParams();

  useEffect(() => {
    fetch(`${BACK_END_URL}Product/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });

    fetch(`${BACK_END_URL}Photo/by-product/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPhoto(data[0].path);
      });

    fetch(`${BACK_END_URL}SubSubcategory/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setSubcategory(data);
      });

    fetch(`${BACK_END_URL}Category/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCategory(data);
      });
    
  }, []);

  const handleBuy = (e) => {
    setBought(!bought);
  };

  return (
    <Box
      p={3}
      display="flex"
      justifyContent="space-between"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: 0, md: "24px 72px" },
        marginTop: { xs: "26px", md: "52px" },
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      {loading ? (
        <ItemSkeleton />
      ) : (
        <>
          <ItemPhoto photo={photo} name={product.name} />
          <Box flexBasis={{ xs: "100%", md: "50%" }} mb={5}>
            <Box mb={2}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontSize: { xs: "24px", md: "32px" } }}
              >
                {product.name}
              </Typography>
              <Divider sx={{ mt: "12px", mb: "8px" }} />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontSize: { xs: "14px", md: "20px" },
                      color: "#565959",
                    }}
                  >
                    Price:{" "}
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{
                        fontSize: { xs: "18px", md: "24px" },
                        color: "#b12704",
                      }}
                    >
                      ${product.price}
                    </Typography>
                  </Typography>
                  <ItemStock available_count={product.available_count} />
                </Box>
                <ItemButton bought={bought} handleBuy={handleBuy} />
              </Box>

              <ItemCharasteristics
                subcategory={subcategory.name}
                category={category.name}
              />
            </Box>
            <ItemDescription description={product.description} />
          </Box>
        </>
      )}
    </Box>
  );
}
