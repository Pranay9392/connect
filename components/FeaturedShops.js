// components/FeaturedShops.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ShopCard from './ShopCard'; // Reuse the existing ShopCard component
import local_grocery from '../assets/images/shops/autodriver.png'
import local_restaurnat from '../assets/images/shops/auto_women.jpg'

import grocery from '../assets/images/shops/local_grocery.jpg';
import restaurant from '../assets/images/shops/restaurnat_serving.jpg';
import auto from '../assets/images/shops/auto_women.jpg';
import clothing from '../assets/images/shops/fashion.jpg';     // New image
import electronics from '../assets/images/shops/electronics.jpg'; // New image
import bookstore from '../assets/images/shops/bookstore.jpg';   // New image
import salon from '../assets/images/shops/barber.jpg';           // New image
import bakery from '../assets/images/shops/bakery.jpg';         // New image
import fitness from '../assets/images/shops/gym.jpg';           // New image
import pharmacy from '../assets/images/shops/pharmacy.jpg';       // New image



const featuredShops = [
  {
    id: 1,
    name: 'Local Grocery',
    category: 'Grocery',
    image: grocery,
    description: 'Fresh groceries from local stores.',
  },
  {
    id: 2,
    name: 'Local Restaurant',
    category: 'Food',
    image: restaurant,
    description: 'Delicious meals delivered to your door.',
  },
  {
    id: 3,
    name: 'Local Transport',
    category: 'Transport',
    image: auto,
    description: 'Get around town with ease.',
  },
  {
    id: 4,
    name: 'Fashion Hub',
    category: 'Clothing',
    image: clothing,
    description: 'Trendy apparel for men and women.',
  },
  {
    id: 5,
    name: 'Tech World',
    category: 'Electronics',
    image: electronics,
    description: 'Latest gadgets and electronic devices.',
  },
  {
    id: 6,
    name: 'Book Nook',
    category: 'Bookstore',
    image: bookstore,
    description: 'Books from all genres for avid readers.',
  },
  {
    id: 7,
    name: 'Glamour Salon',
    category: 'Beauty & Wellness',
    image: salon,
    description: 'Pamper yourself with a relaxing beauty session.',
  },
  {
    id: 8,
    name: 'Sweet Treats Bakery',
    category: 'Bakery',
    image: bakery,
    description: 'Delectable pastries and fresh bread.',
  },
  {
    id: 9,
    name: 'Fit & Active',
    category: 'Fitness',
    image: fitness,
    description: 'A gym with the latest equipment and trainers.',
  },
  {
    id: 10,
    name: 'Local Pharmacy',
    category: 'Health',
    image: pharmacy,
    description: 'Your trusted pharmacy for health needs.',
  },
  
];

const FeaturedShops = () => {
  const [showAll, setShowAll] = useState(false);

  const handleMorePress = () => {
    setShowAll(!showAll);
  };

  const displayedShops = showAll ? featuredShops : featuredShops.slice(0, 6);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured Shops</Text>
      <FlatList
        data={displayedShops}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ShopCard shop={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <TouchableOpacity onPress={handleMorePress} style={styles.moreButton}>
        <Text style={styles.moreButtonText}>{showAll ? 'Show Less' : 'Show More'}</Text>
      </TouchableOpacity>
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
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  moreButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  moreButtonText: {
    color: '#3498db',
    fontSize: 16,
  },
});

export default FeaturedShops;
