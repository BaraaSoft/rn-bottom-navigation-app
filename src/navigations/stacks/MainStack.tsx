import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home,{navigationOptions} from "../../screens/Home";
import {SCREENS,Buy,Profile,Transactions,Notifications,Scan} from '../../screens'
import TabBar from "../../components/TabBar";



// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  const {APP_SCREENS} = SCREENS
  return (
    <Tab.Navigator initialRouteName={APP_SCREENS.HomeScreen}  tabBar={TabBar} >
        <Tab.Screen 
            component={Home} 
            name={APP_SCREENS.HomeScreen}
            options={navigationOptions} />
        <Tab.Screen 
            component={Buy} 
            name={APP_SCREENS.BuyScreen}
            options={navigationOptions} />
        <Tab.Screen 
            component={Transactions} 
            name={APP_SCREENS.TransactionsScreen}
            options={navigationOptions} />
        <Tab.Screen 
            component={Profile} 
            name={APP_SCREENS.ProfileScreen}
            options={navigationOptions} />
        <Tab.Screen 
            component={Scan} 
            name={APP_SCREENS.ScanScreen}
            options={navigationOptions} />
    </Tab.Navigator>
 
  );
};

export default MainStack;
