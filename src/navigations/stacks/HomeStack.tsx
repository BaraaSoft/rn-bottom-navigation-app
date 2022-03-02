import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home,{navigationOptions} from "../../screens/Home";
import {APP_SCREENS} from '../../screens/screens'



// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator initialRouteName={APP_SCREENS.HomeScreen}>
        <Tab.Screen 
            component={Home} 
            name={APP_SCREENS.HomeScreen}
            options={navigationOptions} />
    </Tab.Navigator>
 
  );
};

export default HomeStack;
