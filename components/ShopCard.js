// components/ShopCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ShopCard = ({ shop, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(shop)}>
      <Image source={shop.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{shop.name}</Text>
        <Text style={styles.category}>{shop.category}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {shop.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '47%',  // Allows for two cards per row with spacing
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',  // Ensures the image covers the whole area
  },
  info: {
    padding: 3, // Slightly increased padding for better text spacing
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  category: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
});

export default ShopCard;
