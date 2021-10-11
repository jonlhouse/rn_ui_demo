import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

interface LoginScreenProps {
    loginFunc: React.Dispatch<React.SetStateAction<boolean>>,
}

const LoginScreen = (props: LoginScreenProps) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const emailRef = useRef<null|TextInput>(null);
    const passwordRef = useRef<null|TextInput>(null);
    const loginButtonRef = useRef<null|Text>(null);

    return (
        <View style={styles.container}>
            <View style={{ width: 360, height: 240, borderColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white'}}>Logo Placeholder</Text>
            </View>
            <Pressable>
                <TextInput 
                    autoCapitalize={'none'}                
                    keyboardType={'email-address'}
                    onSubmitEditing={(e) => { passwordRef.current?.focus() }}
                    onChangeText={(text) => { setEmail(text) }}
                    placeholder={'Email'}
                    ref={emailRef}
                    returnKeyType={'next'}
                    style={styles.textInput}
                    value={email}
                />
            </Pressable>
            <Pressable>
                <TextInput 
                    autoCapitalize={'none'}                
                    keyboardType={'default'}
                    onSubmitEditing={(e) => { passwordRef.current?.blur() ; loginButtonRef.current?.focus() }}
                    onChangeText={(text) => { setPassword(text) }}
                    placeholder={'Password'}
                    ref={passwordRef}
                    returnKeyType={'next'}
                    secureTextEntry={true}
                    style={styles.textInput}
                    value={password}
                />
            </Pressable>
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                    Error: Unable to login.
                </Text>
            </View>
            <Pressable                
                style={({ pressed, focused }) => {
                    return [
                        styles.button,
                        focused && styles.buttonFocused,
                        pressed && styles.buttonPressed,                    
                    ]
                }}
                // onPress={() => {props.loginFunc(true)}}
            >
                <Text ref={loginButtonRef} style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    textInput: {
        width: 480,
        margin: 12,
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        backgroundColor: '#888888'
    },
    textInputFocused: {
        borderColor: 'green',
    },
    textInputPressed: {
        borderColor: 'red'
    },
    button: {
        alignItems: 'center',
        width: 480,
        height: 50,
        backgroundColor: 'purple',
        borderColor: 'blue',
    },
    buttonFocused: {
        backgroundColor: 'green',
    },
    buttonPressed: {
        backgroundColor: 'red'
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    },
    errorContainer: {
        paddingBottom: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 18,        
    },
})
