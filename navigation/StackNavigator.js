// navigation/StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ title: 'Product Details' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
