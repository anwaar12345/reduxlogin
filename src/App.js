import React,{Component  } from  'react';
import {View,Text } from  'react-native';
import {Provider} from  'react-redux';
import {createStore} from  'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
    authDomain: "rnapp-auth-class-anwar.firebaseapp.com",
    databaseURL: "https://rnapp-auth-class-anwar.firebaseio.com",
    projectId: "rnapp-auth-class-anwar",
    storageBucket: "rnapp-auth-class-anwar.appspot.com",
    messagingSenderId: "832143672882"
        });
    }
    render(){
    return(
        <Provider store={createStore(reducers)}>
        <View>
    <LoginForm/>
        </View>
        </Provider>

    );
}
}