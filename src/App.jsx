import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import Header from "./components/Headers";
import Cart from "./components/Pages/Cart";
import ItemList from "./components/Pages/ItemList";
import Item from "./components/Pages/ItemList/Item";
import MessageComponent from "./components/UI/Common/MessageComponent";
import OrderList from "./components/Pages/OrderList";
import { Modal } from "@mui/material";
import Home from "./components/Pages/Home";
import "./App.css";
import React, { useState } from "react";
import Login from "./components/Pages/Login";
import PrivateRoute from "./components/custom/Wrappers/PrivateRoute";

export const AppContext = React.createContext();

function App() {
  const [open, setOpen] = useState(false);
  const onModalOpen = () => setOpen(true);
  const onModalClose = () => setOpen(false);

  const contextValue = {
    onModalOpen,
    searchQuery: "",
    originalList: null,
    selectedSubCategories: null,
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={contextValue}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item-list" element={<ItemList />} />
            <Route path="/item/:id" element={<Item />} />

            <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
            <Route
              path="/check-out"
              element={
                <PrivateRoute
                  element={
                    <MessageComponent
                      header="Your order has been successfully placed!"
                      message="An administrator will contact you shortly to clarify the details. Thank
                            you for your choice!"
                    />
                  }
                />
              }
            />
            <Route
              path="/order-list"
              element={<PrivateRoute element={<OrderList />} />}
            />
            <Route
              path="*"
              element={
                <MessageComponent
                  header="Page is not found 404"
                  message="Request URL is not found"
                />
              }
            />
          </Routes>
          <Modal open={open} onClose={onModalClose}>
            <Login />
          </Modal>
        </AppContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
