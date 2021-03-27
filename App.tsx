import React, { ReactNode, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const initialTodos = ['do something fun', 'wash dishes'];

export default function App(): ReactNode {
  const [todos, _setTodos] = useState(initialTodos);
  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <Text key={todo}>{todo}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    flex: 1,
    justifyContent: 'center',
  },
});
