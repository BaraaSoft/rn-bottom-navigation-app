import React from "react";
import { NavigationScreen } from "types/navigation";
import {TransactionModel}from "types/models";
import { Container ,Title} from "./TransactionItemScreen.style";



export interface TransactionItemScreenProps{
    navigation: NavigationScreen;
    route:any
}

const TransactionItemScreen = (props:TransactionItemScreenProps)=>{
    const transcItem:TransactionModel = props.route.params
    return(
        <Container>
            <Title>Transaction Item ID - {transcItem.id}</Title>
        </Container>
    )
}

export default TransactionItemScreen