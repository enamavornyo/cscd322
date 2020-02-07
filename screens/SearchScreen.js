import React from "react";
import { Text, View } from "react-native";

import { MonoText } from "../components/StyledText";

export default function SearchScreen() {
  return (
    <View>
      <Text>Search!</Text>
    </View>
  );
}
SearchScreen.navigationOptions = {
  title: "Search"
};
