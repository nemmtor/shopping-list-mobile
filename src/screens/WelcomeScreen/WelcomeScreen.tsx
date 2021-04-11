import React, { useCallback } from 'react';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';

import { Screens } from '../screens.enum';

import { styles } from './WelcomeScreen.styles';
import { WelcomeScreenProps } from './WelcomeScreen.types';

export const WelcomeScreen = ({
  navigation,
}: WelcomeScreenProps): JSX.Element => {
  const handleNextScreen = useCallback(() => {
    navigation.navigate(Screens.Main);
  }, []);

  return (
    <TouchableOpacity onPress={handleNextScreen} style={styles.touchableArea}>
      <ImageBackground
        style={styles.bg}
        resizeMode="cover"
        source={require('../../assets/home-bg.png')}
      >
        <Text style={styles.title}>Welcome to shopping list app!</Text>
        <Text style={styles.subtitle}>Tap the screen to continue.</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
