import React from 'react'
import { Pressable, Text } from 'react-native'

const SecondScreen = () => {
    return (
        <Pressable style={{flex: 1, backgroundColor: 'hsl(81, 61%, 65%)'}}>
            <Text style={{color: 'white'}}>Second Screen</Text>
        </Pressable>
    )
}

export default SecondScreen
