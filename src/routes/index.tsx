import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import History from '../screens/History/Index';

type RootStackParamList = {
  Home: undefined;
  History: undefined;
};

export type RouterProps = NativeStackScreenProps<
  RootStackParamList,
  'History',
  'Home'
>;

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            headerTintColor: '#fff',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
