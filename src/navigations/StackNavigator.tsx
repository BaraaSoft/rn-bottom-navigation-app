import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./stacks/MainStack";




const RootStack = createStackNavigator();
// const Main = createStackNavigator();


const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeScreen">
      <RootStack.Screen component={MainStack} name="MainStack" options={{headerShown:false}} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;