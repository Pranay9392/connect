// components/WelcomeBanner.js
import React, { useRef } from 'react';
import { View, Image, Animated, StyleSheet, Dimensions } from 'react-native';

const bannerImages = [
  require('../assets/images/transport.jpg'), // Replace with actual images
  require('../assets/images/food.jpg'),
  require('../assets/images/fashion.jpg'),
];

const screenWidth = Dimensions.get('window').width;

const WelcomeBanner = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.bannerContainer}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={2}
      >
        {bannerImages.map((image, index) => (
          <Animated.View key={index} style={styles.bannerImageContainer}>
            <Image source={image} style={styles.bannerImage} />
          </Animated.View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    height: 150,
    marginBottom: 20, // Added some margin for spacing
    marginHorizontal: 10, // Added horizontal margin for spacing
    overflow: 'hidden', // Ensures that images are properly contained
    borderRadius: 10, // Added rounded corners
  },
  bannerImageContainer: {
    width: screenWidth - 20, // Adjusted width to account for horizontal margins
    height: '100%',
    marginRight: 10, // Added margin between images
    borderRadius: 10, // Make sure each image has rounded corners
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default WelcomeBanner;
