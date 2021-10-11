import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, useNavigationContainerRef, } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from './navigators/TabBar';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const Home = () => {

    const navigationRef = useNavigationContainerRef();

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer ref={navigationRef}>
            <Tab.Navigator 
                initialRouteName="First"
                backBehavior='history'
                screenOptions={{}}
                sceneContainerStyle={{ }}
                tabBar={props => <TabBar {...props} />}
            >
                <Tab.Screen name="First" component={FirstScreen} options={{headerShown: false}}/>
                <Tab.Screen name="Second" component={SecondScreen} options={{headerShown: false}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Home

const styles = StyleSheet.create({})
