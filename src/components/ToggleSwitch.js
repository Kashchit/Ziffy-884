import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ToggleSwitch = ({ value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Veg Mode</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#767577', true: '#FF5A5F' }}
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
        style={styles.switch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});

export default ToggleSwitch;
