import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { CartContext } from "../contexts/CartContext";
import { Card, CardMedia, CardContent, Typography, Button, Container, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const cartContext = useContext(CartContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      cartContext?.addToCart(product);
      navigate("/cart"); 
    }
  };

  if (!product) return <Typography sx={{ textAlign: "center", marginTop: 4 }}>Loading...</Typography>;

  return (
    <Container sx={{ marginTop: 4 }}>
      <Card sx={{ 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        padding: 2, 
        maxWidth: 800, 
        margin: "auto"
      }}>
        <Box sx={{ flexShrink: 0 }}>
          <CardMedia 
            component="img" 
            sx={{ width: 250, height: 250, objectFit: "contain", padding: "10px", backgroundColor: "#f5f5f5" }} 
            image={product.image} 
            alt={product.title} 
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>{product.description}</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>${product.price}</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ marginTop: 2 }} 
            onClick={handleAddToCart}
            startIcon={<ShoppingCartIcon />} 
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
