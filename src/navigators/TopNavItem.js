import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'

const TopNavItem = (props) => {
    return (
        <Pressable key={props.index} style={{flex: 1}}>
            <Text style={{color: 'white'}}>{props.name}</Text>
        </Pressable>
    )
}

export default TopNavItem

const styles = StyleSheet.create({

});
