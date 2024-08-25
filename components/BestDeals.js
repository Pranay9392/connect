// components/BestDeals.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard'; // Reuse the existing ProductCard component

import fish from '../assets/images/prouducts/fish.jpg'
import cake from '../assets/images/prouducts/cake.jpg'
import goat from '../assets/images/prouducts/goat.jpg'
import rice from '../assets/images/prouducts/rice.jpg'
import honey from '../assets/images/prouducts/honey.jpg'



const bestDeals = [
  {
    id: 1,
    name: 'Product 1',
    image: fish,
    price: 29.99,
    discount: 20,
  },
  {
    id: 2,
    name: 'Product 2',
    image: goat,
    price: 39.99,
    discount: 25,
  },
  {
    id: 3,
    name: 'Product 3',
    image: rice,
    price: 19.99,
    discount: 15,
  },
  {
    id: 4,
    name: 'Product 4',
    image: rice,
    price: 49.99,
    discount: 30,
  },
  {
    id: 5,
    name: 'Product 5',
    image: cake,
    price: 25.99,
    discount: 10,
  },
  {
    id: 6,
    name: 'Product 6',
    image: honey,
    price: 59.99,
    discount: 35,
  },
];

const BestDeals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Best Deals</Text>
      <FlatList
        data={bestDeals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    paddingLeft: 10,
  },
});

export default BestDeals;
