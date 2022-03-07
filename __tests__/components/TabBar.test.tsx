import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import StackNavigator from '../../src/navigations/StackNavigator';
import {setTopLevelNavigator} from "../../src/services/navigationService";

jest.useFakeTimers()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
 const Component = (
             <NavigationContainer ref={setTopLevelNavigator} theme={theme} >
                <StackNavigator/>
            </NavigationContainer>);

describe("TabBar component",()=>{
    
    it("render without error", ()=>{
        const test = render(Component);
    });

     it("shows all bottom tab buttons", async ()=>{
        const {findAllByTestId} = render(Component);
        const items = await findAllByTestId('TabButton');
        expect(items.length).toBe(5);
    });

    it("shows Home screen on home tab pressed ", async ()=>{
        const { findByText,findByA11yLabel} = render(Component);
        const TabBtn = await findByA11yLabel('HomeScreen tab button');
        await fireEvent.press(TabBtn);
        const sreenBody = await findByText('Home screen');
       
        expect(sreenBody).toBeTruthy()
    });

     it("shows Transactions screen on transaction tab pressed ", async ()=>{
        const { findByText,findByA11yLabel} = render(Component);
        const TabBtn = await findByA11yLabel('TransactionsScreen tab button');
        fireEvent(TabBtn,'press')
        const sreenBody = await findByText('Transactions screen');
       
        expect(sreenBody).toBeTruthy()
    });

     it("shows Profile screen on profile tab pressed ", async ()=>{
        const { findByText,findByA11yLabel} = render(Component);
        const TabBtn = await findByA11yLabel('ProfileScreen tab button');
        fireEvent(TabBtn,'press')
        const sreenBody = await findByText('Profile screen');
       
        expect(sreenBody).toBeTruthy()
    });

     it("shows Scan screen on scan tab pressed ", async ()=>{
        const { findByText,findByA11yLabel} = render(Component);
        const TabBtn = await findByA11yLabel('ScanScreen tab button');
        fireEvent(TabBtn,'press')
        const sreenBody = await findByText('Scan screen');
       
        expect(sreenBody).toBeTruthy()
    });


})