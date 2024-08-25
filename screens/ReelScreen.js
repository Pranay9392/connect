// screens/ReelScreen.js

import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import ReelCard from '../components/ReelCard';
import FeaturedShop from '../components/FeaturedShops';
import profile from './ProfileScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const reels = [
  {
    id: 1,
    title: 'Reel 1',
    video: '',
    creator: 'Local Shop 1',
  },
  {
    id: 2,
    title: 'Reel 2',
    video: '',
    creator: 'Local Shop 2',
  },
  {
    id: 3,
    title: 'Reel 3',
    video: 'https://example.com/video3.mp4',
    creator: 'Local Shop 3',
  },
];

const Stack = createNativeStackNavigator();

const ReelScreen = ({ navigation }) => {
  const handleReelPress = (reel) => {
    // Handle reel press (e.g., like, comment, share)
  };

  const handleProfilePress = (reel) => {
    // Navigate to Featured Shop when profile is pressed
    navigation.navigate('FeaturedShop', { creator: reel.creator });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={({ item }) => (
          <ReelCard reel={item} onPress={handleReelPress} onProfilePress={handleProfilePress} />
        )}
        keyExtractor={(item) => item.id.toString()}
        snapToInterval={Dimensions.get('window').height} // Snap to each reel
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

const FeaturedShopScreen = ({ route }) => {
  const { creator } = route.params;
  return <FeaturedShop creator={creator} />;
};

const ReelNavigator = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="Reels"
          component={ReelScreen}
          options={{ headerShown: false }} // Hide header for immersive experience
        />
        <Stack.Screen
          name="FeaturedShop"
          component={profile}
          options={({ route }) => ({ title: route.params.creator })}
        />
      </Stack.Navigator>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Set background color to black for better viewing
  },
});

export default ReelNavigator;
