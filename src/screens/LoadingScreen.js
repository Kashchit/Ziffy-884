import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    // Wait for 5 seconds before navigating
    const timer = setTimeout(() => {
      navigation.replace('SignUp');  // Redirect to SignUp screen (change to 'Login' if needed)
    }, 5000);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Welcome to Foodie!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B0000',  // Cherry Red Background
  },
  logo: {
    width: 150, // Adjust width as needed
    height: 150, // Adjust height as needed
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
