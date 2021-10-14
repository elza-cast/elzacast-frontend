import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import Success from './screens/Success';
import SignUp from './screens/SignUp';
import AddContact from './screens/AddContact';

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
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Success"
        component={Success}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
