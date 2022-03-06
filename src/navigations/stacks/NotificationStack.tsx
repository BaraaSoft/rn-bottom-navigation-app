import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {APP_SCREENS} from "../../screens/screens";
import  Notifications  from "../../screens/main/Notifications";


const Stack = createStackNavigator();

const NotificationStack = () => {

  return (
   <Stack.Navigator>
      <Stack.Screen name={APP_SCREENS.NotificationsScreen} component={Notifications} options={{headerBackTitleVisible:false}} />
    </Stack.Navigator>
  );
};

export default NotificationStack;
