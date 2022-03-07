import React from 'react';
import { render, fireEvent ,waitFor} from '@testing-library/react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import StackNavigator from '../../src/navigations/StackNavigator';
import {setTopLevelNavigator} from "../../src/services/navigationService";
import Profile from '../../src/screens/main/Profile'

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
        const test = render(<Profile/>);
    });

    it("shows go to notificaiton button", async()=>{
        const {findByA11yLabel} = render(<Profile/>);
        const btn = await findByA11yLabel('notifications button');
         expect(btn).toBeTruthy()
    });

     it("goes to notificaiton screen on notifications button pressed", async()=>{
        const {findByA11yLabel,findAllByText,getByText} = render(App);
        const TabBtn = await findByA11yLabel('ProfileScreen tab button');
        fireEvent.press(TabBtn);
         await waitFor(() => getByText('Profile screen'));

        const btn = await findByA11yLabel('notifications button');
        fireEvent.press(btn);

        const screenBody = await findAllByText('Notifications screen');
         expect(screenBody).toBeTruthy()
    })




})