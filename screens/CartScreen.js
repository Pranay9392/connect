import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';

// Mock data for news blocks
const pages = [
  [
    {
      title: 'Market Fair This Weekend',
      description: 'Join us for the annual market fair with various local stalls.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'New Park Opening',
      description: 'A new park with recreational facilities is opening downtown.',
      image: 'https://via.placeholder.com/150',
    },
  ],
  [
    {
      title: 'Local Band Concert',
      description: 'Enjoy live music from local bands this Saturday evening.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Community Talent Show',
      description: 'Showcase your talent at the upcoming community talent show.',
      image: 'https://via.placeholder.com/150',
    },
  ],
  // Add more pages with news blocks as needed
];

const NewsScreen = () => {
  return (
    <ScrollView style={styles.container} pagingEnabled>
      {pages.map((page, pageIndex) => (
        <View key={pageIndex} style={styles.page}>
          {page.map((newsBlock, blockIndex) => (
            <TouchableOpacity key={blockIndex} style={styles.newsBlock} onPress={() => handlePress(newsBlock)}>
              <Image source={{ uri: newsBlock.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{newsBlock.title}</Text>
                <Text style={styles.description}>{newsBlock.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

// Handle block press to show comments and share options
const handlePress = (newsBlock) => {
  alert(`Clicked on: ${newsBlock.title}`);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  newsBlock: {
    width: '48%',
    margin: '1%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default NewsScreen;
