import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import { goTo, navigate } from "../../services/navigationService";
import { APP_SCREENS } from "../screens";
import { Container,Title ,Link} from "./Home.style";




const Home = ()=>{
    const onPress = ()=>{
        navigate("NotificationStack",APP_SCREENS.NotificationsScreen)
    }
    return(
        <Container>
            <Title>Home screen</Title>
            <TouchableOpacity accessibilityLabel="Goto notifications button" onPress={onPress} >
                <Link>Go to Notifications</Link>
            </TouchableOpacity>
        </Container>
    )
}

export default Home


