import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const ReelCard = ({ reel, onPress, onProfilePress }) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: reel.video }}
        style={styles.video}
        resizeMode="cover"
        isLooping
        shouldPlay
        useNativeControls={true}  // Optionally use native controls
      />
      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => onProfilePress(reel)}>
          <Text style={styles.creator}>{reel.creator}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{reel.title}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => onPress(reel)}>
            <MaterialCommunityIcons name="heart-outline" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress(reel)}>
            <MaterialCommunityIcons name="comment-outline" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress(reel)}>
            <MaterialCommunityIcons name="share-outline" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    // Alternatively, maintain aspect ratio
    // aspectRatio: 9 / 16, 
  },
  overlay: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    zIndex: 1,  // Ensure overlay appears above the video
  },
  creator: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: 10,
  },
});

export default ReelCard;
