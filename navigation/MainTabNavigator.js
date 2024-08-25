// navigation/MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ShopsScreen from '../screens/ShopsScreen';
import ReelScreen from '../screens/ReelScreen';
import NewsScreen from '../screens/NewsScreen';
import EntertainmentScreen from '../screens/EntertainmentScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Define the Tab Navigator
const Tab = createBottomTabNavigator();

// Define the Drawer Navigator
const Drawer = createDrawerNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#42f44b',
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shops"
        component={ShopsScreen}
        options={{
          tabBarLabel: 'Shops',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="storefront-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelScreen}
        options={{
          tabBarLabel: 'Reels',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="play-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Entertainment"
        component={EntertainmentScreen}
        options={{
          tabBarLabel: 'Entertainment',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Custom Drawer Content
const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Menu</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const MainTabNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
        headerShown: false, // Hide the default header
      }}
    >
      <Drawer.Screen
        name="Tabs"
        component={BottomTabs}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerLabel: 'Cart',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

// Styles for custom drawer content
const styles = StyleSheet.create({
  drawerHeader: {
    padding: 16,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainTabNavigator;
