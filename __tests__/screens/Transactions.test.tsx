import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import StackNavigator from '../../src/navigations/StackNavigator';
import {setTopLevelNavigator} from "../../src/services/navigationService";
import Transactions from '../../src/screens/main/Transactions'

jest.useFakeTimers()


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
 const App = (<NavigationContainer ref={setTopLevelNavigator} theme={theme} >
                <StackNavigator/>
            </NavigationContainer>);


describe("Transactions Screen",()=>{
    it("render without error",()=>{
        render(<Transactions/>)
    })

    it("shows Transaction Item screen when transaction button pressed", async()=>{
        const {findByA11yLabel,findAllByText} = render(App);
        const TabBtn = await findByA11yLabel('TransactionsScreen tab button');
        fireEvent.press(TabBtn);
        const btn = await findByA11yLabel('transaction button with id T300');
        fireEvent.press(btn);
        const screenBody = await findAllByText('Transaction Item ID - T300');
        expect(screenBody).toBeTruthy()
    })

})