import React from 'react';
import { StatusBar } from 'react-native';

// eslint-disable-next-line camelcase
import { useFonts, NotoSans_400Regular, NotoSans_700Bold } from '@expo-google-fonts/noto-sans';
import Routes from './src/routes';
import Splash from './src/screens/Splash';
import AppProvider from './src/hooks';

function App() {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
  });

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? (
        <AppProvider>
          <Routes />
        </AppProvider>
      ) : <Splash /> }
    </>
  );
}

export default App;
