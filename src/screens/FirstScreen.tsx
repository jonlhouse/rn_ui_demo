import React from 'react'
import { Pressable, Text } from 'react-native'

const FirstScreen = () => {
    return (
        <Pressable style={{flex: 1, backgroundColor: 'hsl(179, 61%, 65%)'}}>
            <Text style={{color: 'white'}}>First Screen</Text>
        </Pressable>
    )
}

export default FirstScreen
