import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Card, CardMedia, CardContent, Typography, Grid, Container, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; 

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  
  const totalPrice = cartContext?.cart ? cartContext.cart.reduce((sum, product) => sum + product.price, 0) : 0;

  const handleRemoveFromCart = (productId: number) => {
    cartContext?.removeFromCart(productId);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        {cartContext?.cart && cartContext.cart.length === 0 ? "Shopping Cart is Empty" : "Your Shopping Cart"}
      </Typography>

      <Grid container spacing={3}>
        {cartContext?.cart?.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{
              height: 350, 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2
            }}>
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center", backgroundColor: "#f5f5f5" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200, height: 200, objectFit: "contain", padding: "10px" }}
                  image={product.image}
                  alt={product.title}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontSize: "1rem", height: "50px", overflow: "hidden" }}>
                  {product.title}
                </Typography>
                <Typography variant="body2">${product.price.toFixed(2)}</Typography>
                <Button 
                  variant="contained" 
                  color="error" 
                  sx={{ marginTop: 2 }} 
                  onClick={() => handleRemoveFromCart(product.id)}
                  startIcon={<DeleteIcon />} 
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      
      {cartContext?.cart && cartContext.cart.length > 0 && (
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Cart;
