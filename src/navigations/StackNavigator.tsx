import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./stacks/MainStack";
import TransactionStack from "./stacks/TransactionStack";




const RootStack = createStackNavigator();



const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeScreen">
      <RootStack.Screen component={MainStack} name="MainStack" options={{headerShown:false}} />
      <RootStack.Screen component={TransactionStack} name="TransactionStack" options={{headerShown:false}} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;