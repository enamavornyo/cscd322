import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Text, View } from "react-native";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome!</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Home"
};
