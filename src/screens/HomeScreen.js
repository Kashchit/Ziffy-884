import React, { useState } from 'react';
import { View, FlatList, StyleSheet, ScrollView, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import ToggleSwitch from '../components/ToggleSwitch';
import RestaurantCard from '../components/RestaurantCard';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [vegMode, setVegMode] = useState(false);

  const restaurants = [
    { id: 1, name: 'Pizza Palace', isVeg: false },
    { id: 2, name: 'Vegan Bistro', isVeg: true },
    { id: 3, name: 'Sushi Corner', isVeg: false },
    { id: 4, name: 'Salad Express', isVeg: true },
    { id: 5, name: 'Burger Haven', isVeg: false },
    { id: 6, name: 'Green Bowl', isVeg: true },
  ];

  const handleSearch = (searchText) => {
    setSearch(searchText);
  };

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(search.toLowerCase()) &&
      (!vegMode || restaurant.isVeg)
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Find Your Favorite Restaurant</Text>
      <SearchBar value={search} onChangeText={handleSearch} />
      <ToggleSwitch value={vegMode} onValueChange={setVegMode} />
      
      <FlatList
        data={filteredRestaurants}
        renderItem={({ item }) => (
          <RestaurantCard restaurant={item} onAddToCart={(restaurant) => console.log(`Added ${restaurant.name} to cart`)} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FF5A5F',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
