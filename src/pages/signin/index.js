import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Linking, ToastAndroid, TouchableOpacity, Text } from 'react-native'; 
import * as animatable from "react-native-animatable";

const Signin = () => {

    const openUrl = async(url) => {
        if(await Linking.canOpenURL(url)) {
          await Linking.openURL(url)
        }
        else {
          ToastAndroid.show('Can\'t open this URL', ToastAndroid.SHORT)
        }
      }
      

  return (
    
  <View style={styles.container}>
    <animatable.View animation="slideInDown" style={styles.containerTitle}>
        <Text style={styles.title}>Bem Vindo(a)!</Text>
    </animatable.View>
    <animatable.View animation="slideInRight" delay={100} style={styles.containerParagraph}>
        <Text style={styles.paragraph}>Somos o EmpregaTeen!! {'\n'}Uma página focada em auxiliar jovens a conseguir o seu primeiro emprego. Vamos estar postando conteúdos diários com dicas sobre o mercado de trabalho, como conseguir seu primeiro emprego, como montar um currículo, entre outras, que com certeza irão te ajudar muito!{'\n'}Não fique de fora dessa e comece a nos seguir!<Text style={{fontWeight: "bold"}}>Clicando Abaixo</Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => openUrl("https://www.instagram.com/empregateen_?igshid=YmMyMTA2M2Y=/")}>
            <Text style={styles.buttonText}>Ir para o <Text style={{color: "orange"}}>Instagram</Text></Text>
        </TouchableOpacity>
    </animatable.View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E0E0E",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    containerTitle: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff", 
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        alignItems: "center"
    }, 
    containerParagraph: {
        flex: 6,
        padding: 50,
    },
    paragraph: {
        fontSize: 25,
        color: "#fff",
        textAlign: "left",
        borderLeftColor: "#fff",
        borderLeftWidth: 2,
        paddingLeft: 10
    },
    button: {
        backgroundColor: "#004DA6",
        marginTop: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
    }
})


export default Signin;