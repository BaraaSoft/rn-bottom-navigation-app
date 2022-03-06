import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {APP_SCREENS} from "../../screens/screens";
import TransactionItemScreen from '../../screens/transaction/TransactionItemScreen'




const Stack = createStackNavigator();

const TransactionStack = () => {

  return (
   <Stack.Navigator>
      <Stack.Screen name={APP_SCREENS.TransactionItemScreen} component={TransactionItemScreen} />
    </Stack.Navigator>
  );
};

export default TransactionStack;
