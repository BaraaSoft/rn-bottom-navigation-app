import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import { navigate } from "../../services/navigationService";




const Transactions = ()=>{
    const onPress = ()=>{
        navigate("TransactionStack","TransactionItem")
    }
    return(
        <View>
            <Text>Transactions SCREEN</Text>
            <TouchableOpacity onPress={onPress} >
                <Text>Item</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Transactions