import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import Success from '../screens/Success';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="Success"
        component={Success}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
