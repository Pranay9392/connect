// screens/ProductScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const handleAddToCart = () => {
    // Add to cart logic
    alert('Added to cart!');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  price: {
    fontSize: 20,
    color: '#555',
    marginBottom: 16,
  },
});

export default ProductScreen;
