import { useState, useEffect } from "react";
import { Container, Typography, Paper, Box, Divider } from "@mui/material";
import EmptyCart from "./CartItem/EmptyCart";
import CartQuantity from "./CartItem/CartQuantity";
import CartItemHeader from "./CartItem/CartItemHeader";
import CartTotalPrice from "./CartItem/CartTotalPrice";
import CartCheckoutButton from "./CartItem/CartCheckoutButton";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [basketProducts, setBasketProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBasketProducts = async () => {
      const fetchedPhoto =
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg";

      const fakeBasketData = [
        {
          basket_id: 1,
          product: {
            product_id: 1,
            product_name: "Product 1",
            description: "Description of Product 1",
            price: 10.99,
            photo: fetchedPhoto,
          },
          quantity: 2,
        },
        {
          basket_id: 1,
          product: {
            product_id: 2,
            product_name: "Product 2",
            description: "Description of Product 2",
            price: 15.99,
            photo: fetchedPhoto,
          },
          quantity: 1,
        },
      ];

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setBasketProducts(fakeBasketData);

      setLoading(false);
    };

    fetchBasketProducts();
  }, []);

  const handleCheckout = () => {
    navigate("/check-out");
  };

  const deleteSelectedProduct = (index) => {
    const updatedBasket = [...basketProducts];

    updatedBasket.splice(index, 1);

    setBasketProducts(updatedBasket);
  };

  const handleQuantityChange = (index, value) => {
    if (value < 1) {
      value = 1;
    }

    const updatedBasket = [...basketProducts];
    updatedBasket[index].quantity = value;

    setBasketProducts(updatedBasket);
  };

  const total = basketProducts
    .reduce((acc, curr) => acc + curr.quantity * curr.product.price, 0)
    .toFixed(2);

  const isBasketEmpty = basketProducts.length === 0;

  return (
    <Container
      padding="24px 72px"
      sx={{
        marginTop: { xs: "40px", md: "12px" },
        paddingBottom: { xs: 0, md: 4 },
      }}
    >
      {loading ? (
        <Typography
          fontWeight="bold"
          fontSize="3rem"
          textAlign="center"
          marginRight="5px"
        >
          Loading...
        </Typography>
      ) : (
        <>
          {isBasketEmpty ? (
            <EmptyCart />
          ) : (
            <>
              <Typography variant="h4" gutterBottom>
                Shopping Basket
              </Typography>
              {basketProducts.map((item, index) => (
                <Paper key={index} elevation={3} sx={{ marginBottom: "16px" }}>
                  <Box p={2} display="flex" alignItems="center">
                    <img
                      src={item.product.photo}
                      alt={item.product.product_name}
                      style={{ width: "14vw", marginRight: "16px" }}
                    />
                    <CartItemHeader
                      product_name={item.product.product_name}
                      index={index}
                      deleteSelectedProduct={deleteSelectedProduct}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Box />
                    <CartQuantity
                      index={index}
                      quantity={item.quantity}
                      handleQuantityChange={handleQuantityChange}
                    />
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{ fontSize: { xs: "18px", md: "24px" } }}
                    >
                      ${(item.quantity * item.product.price).toFixed(2)}
                    </Typography>
                  </Box>
                  {index !== basketProducts.length - 1 && <Divider />}
                </Paper>
              ))}
              <CartTotalPrice total={total} />
              <CartCheckoutButton handleCheckout={handleCheckout} />
            </>
          )}
        </>
      )}
    </Container>
  );
}
