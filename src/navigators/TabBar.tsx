import React from 'react';

import { View, Pressable, Dimensions, StyleSheet, Text, ViewStyleProp } from 'react-native'

const { width } = Dimensions.get('window')

const TabBar = ({ state, descriptors, navigation }: any) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.logo}><Text style={{ color: 'white' }}>Logo</Text></View>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isSelected = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isSelected && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <Pressable 
                        key={index} 
                        onPress={onPress} 
                        style={({pressed, focused}) =>  {
                            return [
                                styles.mainItemContainer, 
                                isSelected && styles.itemSelected,
                                focused && styles.itemFocued,
                                pressed && styles.itemPressed,
                            ]
                        }}
                    >
                        <Text style={styles.label}>{label}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(73,75,90,.8)',
    },
    logo: {
        width: 240,
        borderColor: 'white',
        borderWidth: 1,
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        // borderRadius: 1, 
        borderColor: "#333B42"
    },
    itemSelected: {
        borderWidth: 1,
        borderColor: 'yellow',
    },
    itemFocued: {
        borderWidth: 1,
        borderColor: 'green',
    },
    itemPressed: {
        borderWidth: 1,
        borderColor: 'red',
    },
    label: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'none'
    },
})


export default TabBar;
