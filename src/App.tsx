import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';
import {setTopLevelNavigator} from "./services/navigationService";


class App extends Component{

  render(){
    return(
      <NavigationContainer ref={setTopLevelNavigator}>
        <StackNavigator/>
      </NavigationContainer>
    )
  }
}




export default App;
