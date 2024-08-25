// screens/EntertainmentScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Mock Data
const featuredContent = [
  'https://via.placeholder.com/400x200',
  'https://via.placeholder.com/400x200',
  'https://via.placeholder.com/400x200',
];

const categories = [
  { title: 'Movies', data: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'] },
  { title: 'TV Shows', data: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'] },
  { title: 'Trending', data: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'] },
];

// Component for each category item
const CategoryItem = ({ imageUri }) => (
  <View style={styles.categoryItem}>
    <Image source={{ uri: imageUri }} style={styles.categoryImage} />
  </View>
);

const EntertainmentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Entertainment</Text>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialCommunityIcons name="magnify" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Featured Content */}
      <View style={styles.featuredContainer}>
        <Text style={styles.sectionTitle}>Featured</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredContent.map((uri, index) => (
            <TouchableOpacity key={index} style={styles.featuredItem}>
              <Image source={{ uri: uri }} style={styles.featuredImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Categories */}
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.sectionTitle}>{category.title}</Text>
          <FlatList
            data={category.data}
            renderItem={({ item }) => <CategoryItem imageUri={item} />}
            keyExtractor={(item, idx) => idx.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchButton: {
    padding: 8,
  },
  featuredContainer: {
    marginVertical: 16,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 8,
  },
  featuredItem: {
    marginRight: 10,
  },
  featuredImage: {
    width: 300,
    height: 150,
    borderRadius: 8,
  },
  categoryContainer: {
    marginVertical: 16,
  },
  categoryItem: {
    marginRight: 10,
  },
  categoryImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});

export default EntertainmentScreen;
