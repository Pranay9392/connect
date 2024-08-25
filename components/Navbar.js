import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = ({ onLocationPress }) => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <Ionicons name="search-outline" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          placeholder="Search for shops or products"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.voiceButton}>
          <Ionicons name="mic-outline" size={20} color="#555" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onLocationPress} style={styles.locationContainer}>
        <Ionicons name="location-outline" size={22} color="#4285F4" style={styles.locationIcon} />
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationText}>Hyderabad, 500081</Text> {/* Example location */}
        </View>
        <Ionicons name="chevron-forward-outline" size={22} color="#4285F4" style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginTop: 10,
    elevation: 2,
  },
  locationIcon: {
    marginRight: 10,
  },
  locationTextContainer: {
    flex: 1,
  },
 
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default Navbar;
