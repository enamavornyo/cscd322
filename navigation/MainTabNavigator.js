import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import MessagesScreen from "../screens/Messages";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

HomeStack.path = "";

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

SearchStack.path = "";

const NotificationsStack = createStackNavigator(
  {
    Settings: NotificationsScreen
  },
  config
);

NotificationsStack.navigationOptions = {
  tabBarLabel: "Notifications",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
    />
  )
};

NotificationsStack.path = "";

const MessagesStack = createStackNavigator(
  {
    Settings: MessagesScreen
  },
  config
);

MessagesStack.navigationOptions = {
  tabBarLabel: "Messages",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
    />
  )
};

MessagesStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  NotificationsStack,
  MessagesStack
});

tabNavigator.path = "";

export default tabNavigator;
