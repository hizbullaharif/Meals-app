import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { registerRootComponent } from "expo";
import { AppRegistry, Platform } from "react-native";
// import App from "./App";

import MealsNavigater from "./navigation/MealsNavigater";

const FetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={FetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <MealsNavigater />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// AppRegistry.registerComponent("main", () => App);

// export default registerRootComponent(App);

export default App;
