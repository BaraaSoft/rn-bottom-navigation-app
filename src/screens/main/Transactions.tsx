import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import { TransactionModel } from "types/models";
import { transactionsList } from "../../../__mock__/data";
import { navigate } from "../../services/navigationService";
import { Container, ScrollableList,Title,Link } from "./Transactions.style";



const Transactions = ({navigation}:any)=>{
    const onPress = (item:TransactionModel)=>{
        navigate("TransactionStack","TransactionItemScreen",item)
    }
    return(
        <Container>
            <Title>Transactions screen</Title>
            <ScrollableList>
                {
                  transactionsList.map(item=>{
                      return(
                          <TouchableOpacity style={{padding:8}} onPress={onPress.bind(null,item)} >
                                <Link>Transactions {item.id}</Link>
                          </TouchableOpacity>
                         
                      )
                  })  
                }
            </ScrollableList>
            
        </Container>
    )
}

export default Transactions