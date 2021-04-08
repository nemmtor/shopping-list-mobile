import React, { useCallback } from 'react';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';

import { SafeView } from '../../components';
import { Screens } from '../screens.enum';

import { styles } from './WelcomeScreen.styles';
import { WelcomeScreenProps } from './WelcomeScreen.types';

export const WelcomeScreen = ({
  navigation,
}: WelcomeScreenProps): JSX.Element => {
  const handleContinue = useCallback(() => {
    navigation.navigate(Screens.Main);
  }, []);

  return (
    <SafeView>
      <TouchableOpacity onPress={handleContinue} style={styles.touchableArea}>
        <ImageBackground
          style={styles.bg}
          resizeMode="cover"
          source={require('../../assets/home-bg.png')}
        >
          <Text style={styles.title}>Welcome to shopping list app!</Text>
          <Text style={styles.subtitle}>Tap the screen to continue.</Text>
        </ImageBackground>
      </TouchableOpacity>
    </SafeView>
  );
};
