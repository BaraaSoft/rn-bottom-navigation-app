import React from "react";
import {TouchableOpacity} from 'react-native';
import { navigate } from "../../services/navigationService";
import { APP_SCREENS } from "../screens";
import { Container,Title ,Link} from "./Profile.style";




const Profile = ()=>{
    const onPress = ()=>{
        navigate("NotificationStack",APP_SCREENS.NotificationsScreen)
    }
    return(
        <Container>
            <Title>Profile screen</Title>
            <TouchableOpacity accessibilityLabel="notifications button" onPress={onPress} >
                <Link>Go to Notifications</Link>
            </TouchableOpacity>
        </Container>
    )
}

export default Profile


