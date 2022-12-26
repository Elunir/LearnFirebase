import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';

const LoginScreen = ({}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

  return (
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
            <Text style={styles.title}>Username</Text>
            <TextInput 
                value={username}
                onChange={(text: any) => setUsername(text)}
                style={styles.inputStyle}
            />
            <Text style={styles.title}>Password</Text>
            <TextInput 
                value={password}
                onChange={(text: any) => setPassword(text)}
                style={styles.inputStyle}
            />
        </View>
        <Pressable onPress={() => {}} style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Text style={styles.noteText}>OR login with social account?</Text>
        <View style={{alignSelf: 'center'}}>
            <FontAwesomeIcon name="github-square" size={45} color="black" />
            <Text style={styles.smallTitle}>Github</Text>
        </View>
      </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,  
    },
    inputWrapper: {
        flex: 0.7,
        justifyContent: 'center',
    },
    title: {
        marginTop: 10,
        fontSize: 17,
        color: "#5C5CFF"
    },
    inputStyle: {
        borderBottomColor: "#5C5CFF",
        borderBottomWidth: 1,
        height: 45,

    },
    buttonWrapper: {
        backgroundColor: "#5C5CFF",
        height: 50,
        borderRadius: 3,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '900',
        alignSelf: 'center',
    },
    noteText: {
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    smallTitle: {
        fontSize: 14,
        color: "black"
    },
})