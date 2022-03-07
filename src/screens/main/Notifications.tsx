import React from "react";
import {TouchableOpacity} from 'react-native';
import { Title,Container,ScrollableList,Link } from "./Notifications.style";
import { navigate } from "../../services/navigationService";
import { TransactionModel } from "types/models";
import { transactionsList } from "../../../__mock__/data";




const Notifications = ()=>{
    const onPress = (item:TransactionModel)=>{
        navigate("TransactionStack","TransactionItemScreen",item)
    }
    return(
        <Container>
            <Title>Notifications screen</Title>
            <ScrollableList>
                {
                  transactionsList.filter(x=>x.notification_read == false).map(item=>{
                      return(
                          <TouchableOpacity testID="UnreadNotification" accessibilityLabel={`Unread notification button with id ${item.id}`} key={item.id} style={{padding:8}} onPress={onPress.bind(null,item)} >
                                <Link>Unread notifications - Transactions ID {item.id}</Link>
                          </TouchableOpacity>
                      )
                  })  
                }
            </ScrollableList>
            
        </Container>
    )
}

export default Notifications