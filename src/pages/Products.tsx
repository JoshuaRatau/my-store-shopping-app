import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Button, Grid } from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
    {products.map((product) => (
      <Grid item xs={12} sm={6} md={4} key={product.id}>
        <Card sx={{ 
          height: 350, 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between" 
        }}>
          <CardMedia 
            component="img" 
            height="200" 
            image={product.image} 
            alt={product.title}
            sx={{ objectFit: "contain", padding: "10px", backgroundColor: "#f5f5f5" }}
          />
          <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontSize: "1rem", height: "50px", overflow: "hidden" }}>
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">${product.price}</Typography>
            <Button component={Link} to={`/product/${product.id}`} variant="contained" color="primary">
              View Details
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  
  );
};

export default Products;
