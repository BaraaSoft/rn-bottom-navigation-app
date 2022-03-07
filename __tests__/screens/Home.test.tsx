import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import StackNavigator from '../../src/navigations/StackNavigator';
import {setTopLevelNavigator} from "../../src/services/navigationService";
import Home from '../../src/screens/main/Home'

jest.useFakeTimers()


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
 const App = (
             <NavigationContainer ref={setTopLevelNavigator} theme={theme} >
                <StackNavigator/>
            </NavigationContainer>);


describe("Home Screen",()=>{

    it("render without error", ()=>{
        const test = render(<Home/>);
    });

    it("shows go to notificaiton button", async()=>{
        const {findByA11yLabel} = render(<Home/>);
        const btn = await findByA11yLabel('Goto notifications button');
         expect(btn).toBeTruthy()
    });

     it("goes to notificaiton screen on notifications button pressed", async()=>{
        const {findByA11yLabel,findAllByText} = render(App);
        const btn = await findByA11yLabel('Goto notifications button');
        fireEvent.press(btn);
        const screenBody = await findAllByText('Notifications screen');
         expect(screenBody).toBeTruthy()
    })




})