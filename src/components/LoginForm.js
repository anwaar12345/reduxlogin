import React,{Component } from 'react';
import {View,Text } from  'react-native';
import firebase from 'firebase';
import  CustomButton from "./common/CustomButton";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import  Input  from "./common/Input";
import  Spinner from "./common/Spinner";
import {connect} from "react-redux";
import {emailChanged} from '../actions';
class LoginForm extends Component{
    
    onEmailChange(text)
    {
    this.PaymentResponse.emailChanged(text);
}
    
    render(){
    return(
        <Card>
            <CardSection>
     
   
            <Input
    
    placeholder="user@email.com"
    label="Email: "
    
    onChangeText={this.onEmailChange.bind(this)}
    />
    </CardSection>
    <CardSection>
   <Input
    placeholder="password"
    label="Password"
    />
    </CardSection>
    

    <CardSection>
        <CustomButton>Sign In</CustomButton>
    </CardSection>
    </Card> 
    );
}
}
const styles = {
    errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
    }
    };
    
export default connect(null,emailChanged) (LoginForm);