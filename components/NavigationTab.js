// components/NavigationTab.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const NavigationTab = ({ label, iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={iconName} size={24} color="#000" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
};

export default NavigationTab;
