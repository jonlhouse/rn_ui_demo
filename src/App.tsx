import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

import LoginScreen from './screens/LoginScreen';
import Home from './Home';

import 'react-native/tvos-types.d';

const App = () => {
    
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return (
        <SafeAreaView style={styles.container}>
            <LoginScreen loginFunc={setLoggedIn} />
            {/* <Home /> */}
            {/* { // check for login
            (loggedIn)
                ? <LoginScreen loginFunc={setLoggedIn}/>
                : <Text style={{color: 'white'}}>Logged In</Text>
            } */}
            
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161017',
    }
})
