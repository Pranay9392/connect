import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// ProductCard Component
const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(product)}>
      <Image
        source={product.image}
        style={styles.image}
        defaultSource={require('../assets/images/prouducts/fish.jpg')} // Placeholder if image fails
      />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text> {/* Add numberOfLines prop */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            ₹{product.price.toFixed(2)}
          </Text>
          {product.discount > 0 && (
            <Text style={styles.discount}>-{product.discount}%</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Styles for ProductCard
const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover', // Ensures the image covers the area properly
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    color: '#27ae60', // Green color for price
    fontWeight: 'bold',
  },
  discount: {
    fontSize: 12,
    color: '#e74c3c', // Red color for discount
    marginLeft: 5,
    textDecorationLine: 'line-through', // Strike through for discount
  },
});

export default ProductCard;
