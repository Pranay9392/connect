// screens/NewsScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import news1 from '../assets/images/news/news1.png';
import news2 from '../assets/images/news/news2.png';
import news3 from '../assets/images/news/news3.png';
import news4 from '../assets/images/news/news4.png';
import news5 from '../assets/images/news/news5.png';
import news6 from '../assets/images/news/news6.png'; // Ensure this is the correct path
import { Ionicons, Feather } from '@expo/vector-icons';

// Mock data
const newsBlocks = [
  {
    heading: 'Local Headlines',
    location: 'City Center',
    description: 'Latest updates and insights from the heart of the city.',
    images: [
      news1,
      news2,
      news3,
      news4,
      news5,
      news6,
    ],
  },
  {
    heading: 'Community Events',
    location: 'Northside Park',
    description: 'Upcoming events and activities in your community.',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  },
  {
    heading: 'Sports Updates',
    location: 'Local Stadium',
    description: 'Scores and highlights from recent local matches.',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  },
  {
    heading: 'Weather Alerts',
    location: 'Downtown',
    description: 'Severe weather warnings and forecasts.',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  },
  {
    heading: 'Business News',
    location: 'Financial District',
    description: 'Updates from the world of business and finance.',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  },
];

const NewsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);

  // Handles opening the modal with the selected image and its details
  const handlePress = (blockIndex, imageIndex) => {
    setSelectedImage(newsBlocks[blockIndex].images[imageIndex]);
    setSelectedBlock(newsBlocks[blockIndex]);
    setModalVisible(true);
  };

  // Handles closing the modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
    setSelectedBlock(null);
  };

  // Alert actions for each button
  const handleShare = () => {
    Alert.alert('Share', 'Image shared successfully!');
    closeModal();
  };

  const handleComment = () => {
    Alert.alert('Comment', 'Comment added successfully!');
    closeModal();
  };

  const handleLike = () => {
    Alert.alert('Like', 'You liked the image!');
    closeModal();
  };

  return (
    <ScrollView style={styles.container}>
      {newsBlocks.map((block, blockIndex) => (
        <View key={blockIndex} style={styles.blockContainer}>
          <Text style={styles.heading}>{block.heading}</Text>
          <Text style={styles.location}>{block.location}</Text>
          <View style={styles.page}>
            {block.images.map((imageUri, imageIndex) => (
              <TouchableOpacity
                key={imageIndex}
                style={styles.imageContainer}
                onPress={() => handlePress(blockIndex, imageIndex)}
              >
                {typeof imageUri === 'string' ? (
                  <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                  <Image source={imageUri} style={styles.image} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      {/* Modal for displaying the full-size image and details */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={28} color="#fff" />
            </Pressable>
            <Image
              source={
                selectedImage && (typeof selectedImage === 'string' ? { uri: selectedImage } : selectedImage)
              }
              style={styles.modalImage}
              resizeMode="contain"
            />
            <View style={styles.iconBar}>
              <TouchableOpacity onPress={handleLike} style={styles.iconButton}>
                <Ionicons name="heart-outline" size={28} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleComment} style={styles.iconButton}>
                <Feather name="message-circle" size={28} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleShare} style={styles.iconButton}>
                <Feather name="share" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalFooter}>
              <Text style={styles.modalHeading}>
                {selectedBlock && selectedBlock.heading}
              </Text>
              <Text style={styles.modalLocation}>
                {selectedBlock && selectedBlock.location}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedBlock && selectedBlock.description}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  blockContainer: {
    marginVertical: 16,
    marginHorizontal: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '48%',
    marginBottom: 4,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '90%',
    backgroundColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalImage: {
    width: '100%',
    height: '70%',
    backgroundColor: '#000',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 20,
  },
  iconBar: {
    position: 'absolute',
    bottom: 100,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  iconButton: {
    marginHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  modalFooter: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  modalLocation: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 4,
  },
  modalDescription: {
    fontSize: 14,
    color: '#ddd',
  },
});

export default NewsScreen;
