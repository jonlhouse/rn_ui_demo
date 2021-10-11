import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import {
    NavigationHelpersContext,
    useNavigationBuilder,
    TabRouter,
    TabActions,
    createNavigatorFactory,
} from '@react-navigation/native';

import TopNavItem from './TopNavItem';

const TopTabNavigator = ({ initialRouteName, children, screenOptions, tabBarStyle, contentStyle }) => {

    const { state, navigation, descriptors, NavigationContent } = useNavigationBuilder(TabRouter, {
        children,
        screenOptions,
        initialRouteName,
    });

    return (
        <NavigationContent>
            <View style={styles.navBar}>
                {state.routes.map((route, i) => {
                    <Pressable
                        key={route.key}
                        onPress={() => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!event.defaultPrevented) {
                                navigation.dispatch({
                                    ...TabActions.jumpTo(route.name),
                                    target: state.key,
                                });
                            }
                        }}
                        style={{ flex: 1 }}
                    >
                        <Text>{descriptors[route.key].options.title || route.name}</Text>
                    </Pressable>
                })}
            </View>
            <View style={[{ flex: 1 }, contentStyle]}>
                {state.routes.map((route, i) => {
                    return (
                        <View
                            key={route.key}
                            style={[
                                StyleSheet.absoluteFill,
                                { display: i === state.index ? 'flex' : 'none' },
                            ]}
                        >
                            {descriptors[route.key].render()}
                        </View>
                    );
                })}
            </View>
        </NavigationContent>
    )
}

export const createTopTabNavigator = createNavigatorFactory(TopTabNavigator);

export default TopTabNavigator

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        backgroundColor: 'red',
        height: 50,
        // position: 'absolute',
        // top: 0,
        // backgroundColor: "#182028",
        // borderRadius: 25,
        // marginHorizontal: width*0.1
    }
})
