import React from 'react';
import { render, fireEvent,waitFor } from '@testing-library/react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import StackNavigator from '../../src/navigations/StackNavigator';
import {setTopLevelNavigator} from "../../src/services/navigationService";
import Notifications from '../../src/screens/main/Notifications'
import {transactionsList} from '../../__mock__/data';

//jest.useFakeTimers()


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Unreads = transactionsList.filter(x=>x.notification_read == false).length
const App = (<NavigationContainer ref={setTopLevelNavigator} theme={theme}>
                <StackNavigator/>
            </NavigationContainer>);



const mockedDispatch = jest.fn();

describe("Notifications Screen",()=>{
    beforeEach(() => {mockedDispatch.mockClear();});
    
    it("render without error",()=>{
        render(<Notifications />)
    })

    it("shows unread notifications only", async()=>{
        const {findByA11yLabel,findAllByText,findAllByTestId,getByText} = render(App);
        await waitFor(() => getByText('Home screen'));
        const notifybtn = await findByA11yLabel('Goto notifications button');
        fireEvent(notifybtn, 'press');
       
        await waitFor(() => getByText('Notifications screen'));
        const notific = await findAllByTestId('UnreadNotification')
       expect(notific.length).toEqual(Unreads)
    })


    it("shows Transaction Item screen when unread notifications pressed", async()=>{
        const {findByA11yLabel,findAllByText,findAllByTestId,getByText} = render(App);
        await waitFor(() => getByText('Home screen'));
        const notifybtn = await findByA11yLabel('Goto notifications button');
        fireEvent(notifybtn, 'press');
       
        await waitFor(() => getByText('Notifications screen'));
        const notificBtn = await findByA11yLabel('Unread notification button with id T100');
        fireEvent.press(notificBtn)
        const screenBody = await findAllByText('Transaction Item ID - T100');
        expect(screenBody).toBeTruthy()
    })

})