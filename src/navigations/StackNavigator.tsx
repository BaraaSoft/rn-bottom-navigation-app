import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./stacks/HomeStack";




const RootStack = createStackNavigator();
// const Main = createStackNavigator();


const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeScreen">
      <RootStack.Screen component={HomeStack} name="HomeStack" options={{headerShown:false}} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;