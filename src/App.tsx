import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { AppBar, Toolbar, Button } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront"; 
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 

const App: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/" startIcon={<StorefrontIcon />}>
            Shop
          </Button>
          <Button color="inherit" component={Link} to="/cart" startIcon={<ShoppingCartIcon />}>
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
