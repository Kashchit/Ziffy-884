import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const RestaurantCard = ({ restaurant, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image, replace with actual restaurant image
        style={styles.image}
      />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.description}>Delicious food, fast delivery</Text>
      <Button title="Add to Cart" onPress={() => onAddToCart(restaurant)} color="#FF5A5F" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
});

export default RestaurantCard;
