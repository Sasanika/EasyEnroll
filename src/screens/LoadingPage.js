import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/self-growth.png')}
      />
      <Text style={styles.bottomText}>
      Elevate Your Academic 
Journey with Ease.
      </Text>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',  // Center the image horizontally
    justifyContent: 'center',  // Center the image vertically
  },
  tinyLogo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 330,
  },
  bottomText:{
    position: 'absolute',
    top:730,
    
  },
});
