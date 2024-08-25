// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import Navbar from '../components/Navbar';
import WelcomeBanner from '../components/WelcomeBanner';
import FeaturedShops from '../components/FeaturedShops';
import BestDeals from '../components/BestDeals';

const HomeScreen = ({ navigation }) => {
  const handleLocationPress = () => {
    Alert.alert('Location', 'Location selection functionality is not implemented yet.');
  };

  const handleShopPress = (shop) => {
    navigation.navigate('ShopDetail', { shop });
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <View style={styles.container}>
      <Navbar onLocationPress={handleLocationPress} />
      <ScrollView contentContainerStyle={styles.content}>
        <WelcomeBanner />
        <FeaturedShops onShopPress={handleShopPress} />
        <BestDeals onProductPress={handleProductPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    paddingBottom: 10,
  },
});

export default HomeScreen;
