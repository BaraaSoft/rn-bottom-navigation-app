import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { navigate } from "../services/navigationService";
import { TabBarContainer, TabButton, TabIcon, TabLabelText } from "./TabBar.style";
import {View} from 'react-native'
import {colors} from '../common/colors'

import FoundationIcon from 'react-native-vector-icons/Foundation';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IonIcon from 'react-native-vector-icons/Ionicons';





const NAV_ICONS: any = {
  HomeScreen: <FoundationIcon name="home" size={28}  />,
  BuyScreen: <EntypoIcon  name="shop"  size={28} />,
  ScanScreen:(
    <View style={{
      backgroundColor:colors.main.primary,
      borderRadius:100,
      borderWidth:1,
      padding: 10,
      borderColor:colors.main.primary,
      shadowColor: colors.main.primary,
      shadowOffset: {width: -1, height: 5},
      shadowOpacity: 0.6,
      shadowRadius: 4,
    }} >
      <MaterialCommunityIcon  color={colors.main.white} name="line-scan"  size={28}  />
    </View>

  ),
  TransactionsScreen: <FontistoIcon name="credit-card"  size={20}   />,
  ProfileScreen: <IonIcon  name="person"  size={28}   />,
};

const NAV_ICONS_ACTIVE: any = {
  HomeScreen: <FoundationIcon name="home" size={28}  color={colors.main.primary} />,
  BuyScreen: <EntypoIcon  name="shop"  size={28} color={colors.main.primary} />,
  ScanScreen:<MaterialCommunityIcon 
 
  
  name="line-scan"  size={28}  color={colors.main.primary} />,
  TransactionsScreen: <FontistoIcon name="credit-card"  size={20}  color={colors.main.primary}  />,
  ProfileScreen: <IonIcon  name="person"  size={28} color={colors.main.primary}   />,
};


const TabName:any = {
  HomeScreen: "Home",
  BuyScreen: "Buy",
  ScanScreen: "",
  TransactionsScreen: "Transactions",
  ProfileScreen: "Profile"
}




const TabBar = (props: BottomTabBarProps) => {
  const { routes } = props.state;
  // console.log("tab.params: -> ",routes)

  const handleTabPress = (stackName: string /* focused: boolean */) => () => {
    console.log("handleTabPress: stackName-> ",stackName)
    navigate(stackName);
  };


  return (
    <TabBarContainer style={{
     shadowColor: colors.main.gray,
    shadowOffset: {width: -2, height: -6},
    shadowOpacity: 0.2,
    shadowRadius: 15,
    }}>
      {routes.map((tab, index) => {
        const focused = index === props.state.index;
        const { name,params} = tab;
        return (
          <TabButton
            focused={focused}
            key={tab.key}
            onPress={handleTabPress(tab.name)}
          >
            {focused?NAV_ICONS_ACTIVE[name]:NAV_ICONS[name]}
            <TabLabelText 
              focused={focused}>
              {TabName[name]}
            </TabLabelText>
          </TabButton>
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
