import * as React from "react";
import Routes from "./src/routes";
import { StatusBar } from "react-native";
import AppLoading from 'expo-app-loading';

import { useFonts, NotoSans_400Regular, NotoSans_700Bold } from "@expo-google-fonts/noto-sans";


function App() {
  let [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </>
    );
  }
}

export default App;
