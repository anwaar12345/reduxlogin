import React, { Component }  from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
//import LoginForm from "./components/LoginForm";
import firebase from "firebase";
import ReduxThunk from "redux-thunk"; //then i added this package
import Routes  from "./Router";
class App extends Component {
state= { loggedIn: null };


componentWillMount () {  
     // Your web app's Firebase configuration   
     const firebaseConfig = {   
    authDomain: "rnapp-auth-class-anwar.firebaseapp.com",
    databaseURL: "https://rnapp-auth-class-anwar.firebaseio.com",
    projectId: "rnapp-auth-class-anwar",
    storageBucket: "rnapp-auth-class-anwar.appspot.com",
    messagingSenderId: "832143672882",
  };   
                      // Initialize Firebase
        firebase.initializeApp(firebaseConfig ); 
}

    render() {

    const store = createStore(reducers, {},
        applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>


           {/* <LoginForm/> */
           }
           <Routes />
       
        
        </Provider>
    );
}
}

export default App;
