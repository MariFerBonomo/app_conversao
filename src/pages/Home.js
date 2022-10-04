
import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Alert } from "react-native-web";


export default function Home (){

    let [valor1, setValor1] = useState();
    let [total, setTotal] = useState();

    function CalcularTotal(){

        let resultado = (9*parseFloat(valor1))+ 160 ;
        setTotal(resultado);

        alert("O Resultado total: " + total);
    }


    return(
        <View style= {styles.container}>
            <Text style= {styles.titulo}><u>App Convert</u></Text>

            <TextInput onChangeText={setValor1} style= {styles.campo} placeholder="Valor Celsius"/>

            <TouchableOpacity style= {styles.botao} onPress={CalcularTotal}>
                <Text style= {styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#33CCFF',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',        
    },

    titulo:{
        fontSize:30,
        color:'#000',
        fontWeight:'bold',
        marginBottom: 40,
    },

    campo:{
        backgroundColor:'#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width:300,
        borderRadius: 10,
        textAlign: 'center'
    },

    botao:{
        backgroundColor:'#fff',
        alignItems: 'center',
        padding: 15,
        borderRadius:7,
        marginTop: 20,
        widht: 250
    },

    botaoTexto: {
        color: "",
        fontSize:17,
        fontWeight: "700",

    }
});