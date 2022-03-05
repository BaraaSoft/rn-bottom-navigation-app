import React,{Component} from 'react';
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';
import {setTopLevelNavigator} from "./services/navigationService";
import { colors } from './common/colors';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.main.white,
  },
};
class App extends Component{

  render(){
    return(
      <NavigationContainer ref={setTopLevelNavigator} theme={theme} >
        <StackNavigator/>
      </NavigationContainer>
    )
  }
}




export default App;
