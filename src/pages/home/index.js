import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Home = () => {

    const navigation = useNavigation(); 

  return (
    <View style={styles.container} animation="zoomInUp" delay={4000}>
        <Image
            style={styles.image} 
            source={require('../../assets/logo.png')}
            />
        <Text style={styles.logoText}>
            Emprega Teen
        </Text>
        <Animatable.View animation="slideInUp" style={styles.containerSec}>
            <Text style={styles.title}>Procurando o primeiro emprego? Está no lugar certo!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.ButtonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E0E0E"
    }, 
    image: {
        width: "100%",
        resizeMode: "contain"
    },
    logoText: {
        color: "#fff",
        position: 'absolute',
        fontSize: 26,
        fontWeight: "bold",
        alignSelf: "center",
        bottom: "50%"
    },
    containerSec: {
        flex: 2,
        backgroundColor: "#fff",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold"
    },
    button: {
        backgroundColor: "#004DA6",
        width: 100,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 40,
    },
    ButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
    }
})

export default Home;