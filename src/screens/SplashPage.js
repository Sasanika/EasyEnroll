import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Button from '../components/Button';

const SplashPage = () => {

    const handleButtonPress = () => {
        // Handle button press logic
        console.log('Button Pressed!');
      };
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Image
            style={styles.tinyLogo}
            source={require('../assets/SplashImage.png')}
        />
        <Button title="Press Me" onPress={handleButtonPress} />
    </View>
  )
}

export default SplashPage

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