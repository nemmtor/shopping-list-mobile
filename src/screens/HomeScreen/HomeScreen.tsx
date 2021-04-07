import React from 'react';
import { Text, Button, ImageBackground } from 'react-native';

import { SafeView } from '../../components';
import { Screens } from '../screens.enum';

import { styles } from './HomeScreen.styles';
import { HomeScreenProps } from './HomeScreen.types';

export const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  return (
    <SafeView>
      <ImageBackground
        style={styles.bg}
        resizeMode="cover"
        source={require('../../assets/home-bg.png')}
      >
        <Text>Home screen!</Text>
        <Button
          title="Go to about page"
          onPress={() => navigation.navigate(Screens.About)}
        />
      </ImageBackground>
    </SafeView>
  );
};
