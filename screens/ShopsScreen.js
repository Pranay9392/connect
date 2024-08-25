import React from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample Shop Data
const shops = [
  { id: 1, name: 'Local Grocery 1', category: 'Grocery', image: require('../assets/images/shops/local_grocery.jpg') },
  { id: 2, name: 'Local Grocery 2', category: 'Grocery', image: require('../assets/images/shops/local_grocery.jpg') },
  { id: 3, name: 'Local Grocery 3', category: 'Grocery', image: require('../assets/images/shops/local_grocery.jpg') },
  { id: 4, name: 'Local Grocery 4', category: 'Grocery', image: require('../assets/images/shops/local_grocery.jpg') },
  { id: 5, name: 'Local Grocery 5', category: 'Grocery', image: require('../assets/images/shops/local_grocery.jpg') },

  { id: 6, name: 'Restaurant Delight 1', category: 'Food', image: require('../assets/images/shops/restaurnat_serving.jpg') },
  { id: 7, name: 'Restaurant Delight 2', category: 'Food', image: require('../assets/images/shops/restaurnat_serving.jpg') },
  { id: 8, name: 'Restaurant Delight 3', category: 'Food', image: require('../assets/images/shops/restaurnat_serving.jpg') },
  { id: 9, name: 'Restaurant Delight 4', category: 'Food', image: require('../assets/images/shops/restaurnat_serving.jpg') },
  { id: 10, name: 'Restaurant Delight 5', category: 'Food', image: require('../assets/images/shops/restaurnat_serving.jpg') },

  { id: 11, name: 'Transport Easy 1', category: 'Transport', image: require('../assets/images/shops/auto_women.jpg') },
  { id: 12, name: 'Transport Easy 2', category: 'Transport', image: require('../assets/images/shops/auto_women.jpg') },
  { id: 13, name: 'Transport Easy 3', category: 'Transport', image: require('../assets/images/shops/auto_women.jpg') },
  { id: 14, name: 'Transport Easy 4', category: 'Transport', image: require('../assets/images/shops/auto_women.jpg') },
  { id: 15, name: 'Transport Easy 5', category: 'Transport', image: require('../assets/images/shops/auto_women.jpg') },

  { id: 16, name: 'Fashion Hub 1', category: 'Clothing', image: require('../assets/images/shops/fashion.jpg') },
  { id: 17, name: 'Fashion Hub 2', category: 'Clothing', image: require('../assets/images/shops/fashion.jpg') },
  { id: 18, name: 'Fashion Hub 3', category: 'Clothing', image: require('../assets/images/shops/fashion.jpg') },
  { id: 19, name: 'Fashion Hub 4', category: 'Clothing', image: require('../assets/images/shops/fashion.jpg') },
  { id: 20, name: 'Fashion Hub 5', category: 'Clothing', image: require('../assets/images/shops/fashion.jpg') },

  { id: 21, name: 'Tech World 1', category: 'Electronics', image: require('../assets/images/shops/electronics.jpg') },
  { id: 22, name: 'Tech World 2', category: 'Electronics', image: require('../assets/images/shops/electronics.jpg') },
  { id: 23, name: 'Tech World 3', category: 'Electronics', image: require('../assets/images/shops/electronics.jpg') },
  { id: 24, name: 'Tech World 4', category: 'Electronics', image: require('../assets/images/shops/electronics.jpg') },
  { id: 25, name: 'Tech World 5', category: 'Electronics', image: require('../assets/images/shops/electronics.jpg') },

  { id: 26, name: 'Book Nook 1', category: 'Bookstore', image: require('../assets/images/shops/bookstore.jpg') },
  { id: 27, name: 'Book Nook 2', category: 'Bookstore', image: require('../assets/images/shops/bookstore.jpg') },
  { id: 28, name: 'Book Nook 3', category: 'Bookstore', image: require('../assets/images/shops/bookstore.jpg') },
  { id: 29, name: 'Book Nook 4', category: 'Bookstore', image: require('../assets/images/shops/bookstore.jpg') },
  { id: 30, name: 'Book Nook 5', category: 'Bookstore', image: require('../assets/images/shops/bookstore.jpg') },

  { id: 31, name: 'Glamour Salon 1', category: 'Beauty & Wellness', image: require('../assets/images/shops/barber.jpg') },
  { id: 32, name: 'Glamour Salon 2', category: 'Beauty & Wellness', image: require('../assets/images/shops/barber.jpg') },
  { id: 33, name: 'Glamour Salon 3', category: 'Beauty & Wellness', image: require('../assets/images/shops/barber.jpg') },
  { id: 34, name: 'Glamour Salon 4', category: 'Beauty & Wellness', image: require('../assets/images/shops/barber.jpg') },
  { id: 35, name: 'Glamour Salon 5', category: 'Beauty & Wellness', image: require('../assets/images/shops/barber.jpg') },

  { id: 36, name: 'Sweet Treats 1', category: 'Bakery', image: require('../assets/images/shops/bakery.jpg') },
  { id: 37, name: 'Sweet Treats 2', category: 'Bakery', image: require('../assets/images/shops/bakery.jpg') },
  { id: 38, name: 'Sweet Treats 3', category: 'Bakery', image: require('../assets/images/shops/bakery.jpg') },
  { id: 39, name: 'Sweet Treats 4', category: 'Bakery', image: require('../assets/images/shops/bakery.jpg') },
  { id: 40, name: 'Sweet Treats 5', category: 'Bakery', image: require('../assets/images/shops/bakery.jpg') },

  { id: 41, name: 'Fit & Active 1', category: 'Fitness', image: require('../assets/images/shops/gym.jpg') },
  { id: 42, name: 'Fit & Active 2', category: 'Fitness', image: require('../assets/images/shops/gym.jpg') },
  { id: 43, name: 'Fit & Active 3', category: 'Fitness', image: require('../assets/images/shops/gym.jpg') },
  { id: 44, name: 'Fit & Active 4', category: 'Fitness', image: require('../assets/images/shops/gym.jpg') },
  { id: 45, name: 'Fit & Active 5', category: 'Fitness', image: require('../assets/images/shops/gym.jpg') },

  { id: 46, name: 'Local Pharmacy 1', category: 'Health', image: require('../assets/images/shops/pharmacy.jpg') },
  { id: 47, name: 'Local Pharmacy 2', category: 'Health', image: require('../assets/images/shops/pharmacy.jpg') },
  { id: 48, name: 'Local Pharmacy 3', category: 'Health', image: require('../assets/images/shops/pharmacy.jpg') },
  { id: 49, name: 'Local Pharmacy 4', category: 'Health', image: require('../assets/images/shops/pharmacy.jpg') },
  { id: 50, name: 'Local Pharmacy 5', category: 'Health', image: require('../assets/images/shops/pharmacy.jpg') },
];

// Navbar Component
const Navbar = ({ onLocationPress }) => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <Ionicons name="search-outline" size={20} color="#555" style={styles.searchIcon} />
        <TextInput placeholder="Search for shops or products" style={styles.searchInput} />
        <TouchableOpacity style={styles.voiceButton}>
          <Ionicons name="mic-outline" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onLocationPress} style={styles.locationContainer}>
        <View style={styles.locationContent}>
          <Ionicons name="location-sharp" size={24} color="#4285F4" style={styles.locationIcon} />
          <Text style={styles.locationText}>Hyderabad, 500081</Text> {/* Example location */}
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color="#4285F4" style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

// Shop Card Component
const ShopCard = ({ shop }) => {
  return (
    <TouchableOpacity style={styles.shopCard}>
      <Image source={shop.image} style={styles.shopImage} />
      <View style={styles.shopInfo}>
        <Text style={styles.shopName}>{shop.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Shop Row Component
const ShopRow = ({ category, shops }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{category}</Text>
      <FlatList
        horizontal
        data={shops}
        renderItem={({ item }) => <ShopCard shop={item} />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// Shop Screen Component
const ShopScreen = () => {
  // Group shops by category
  const groupedShops = shops.reduce((acc, shop) => {
    if (!acc[shop.category]) {
      acc[shop.category] = [];
    }
    acc[shop.category].push(shop);
    return acc;
  }, {});

  return (
    <ScrollView style={styles.container}>
      <Navbar onLocationPress={() => alert('Change Location')} />

      {/* Render each category row */}
      {Object.keys(groupedShops).map(category => (
        <ShopRow key={category} category={category} shops={groupedShops[category]} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  navbarContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    elevation: 3,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  voiceButton: {
    paddingHorizontal: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F1F8FF',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#B0C4DE',
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 8,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  categoryContainer: {
    marginVertical: 10,
    paddingHorizontal: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shopCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    marginRight: 5,
    alignItems: 'center',
    width: 150,
    height: 160,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  shopImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  shopInfo: {
    backgroundColor: '#f9f9f9',
    padding: 2,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  shopName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default ShopScreen;
