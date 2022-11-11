import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


const Register = () => {

    const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
        <Animatable.View animation="slideInDown" style={styles.containerText}>
            <Text style={styles.title}>Registrar</Text>
        </Animatable.View>
        <Animatable.View animation="slideInUp" style={styles.containerLogin}>
            <Text style={styles.loginText}>Usuário</Text>
            <TextInput placeholder='Usuário' placeholderTextColor={"gray"} style={styles.input}></TextInput>
            <Text style={styles.loginText}>Email</Text>
            <TextInput placeholder='Email' placeholderTextColor={"gray"} style={styles.input}></TextInput>
            <Text style={styles.loginText}>Senha</Text>
            <TextInput placeholder='Senha' secureTextEntry={true} placeholderTextColor={"gray"} style={styles.input}></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </Animatable.View>
        <View style={styles.secondContainer}>
            <TouchableOpacity>
                <Text style={styles.registrar} onPress={() => {navigation.navigate('SignIn')}}>Logar</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView> 
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E0E0E",
    },
    containerText: {
        flex: 1,
        backgroundColor: "white",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "black",
        fontSize: 38,
        fontWeight: "bold",
    },
    containerLogin: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    loginText: {
        color: "white",
        fontSize: 28,
    },
    input: {
        width: 200,
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: "gray",
        borderRadius: 10,
        marginBottom: 30,
        padding: 10,
        color: "white",
    },
    button: {
        backgroundColor: "#004DA6",
        width: 100,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
    },
    secondContainer: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "space-around"
    },
    registrar: {
        color: "gray"
    }
})

export default Register;