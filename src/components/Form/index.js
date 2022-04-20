import React, { useState } from "react";
import {Dismiss, Button,Keyboard,Pressable, Text, TextInput, View, TouchableOpacity, Vibration, FlatList } from "react-native";
import ResultadoIMC from "./ResultadoIMC";
import styles from "./styles";


export default function Form() {
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [msg, setMsg] = useState("Preencha os campos altura e peso.");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const[msgErro,setMsgErro] = useState(null);
    const[imcList,setImcList] = useState([])

    function validaIMCValues() {
        if (altura != null && peso != null) {
            setMsg("IMC: ");
            setPeso(null);
            setAltura(null);
            setTextButton("Novo Calculo");
            setMsgErro(null);
        } else {
            if(imc == null) {
                
            }
            setMsgErro("*Campo Obrigatório")
                Vibration.vibrate(25)
            setImc(null);
            setTextButton("Calcular")
            setMsg("Preencha os valores de altura e peso!")
        }
    }

    function calculaIMC() {
        validaIMCValues();
        Keyboard.dismiss();
        if(altura != null && peso != null) {

            let alturaFormatada = altura.replace(',','.');
            let pesoFormatado = peso.replace(',','.');
            // return imc != null ? setImc((peso / (altura * altura)).toFixed(2)) : setImc(null) ;
            let totalImc = ((pesoFormatado / (alturaFormatada * alturaFormatada)).toFixed(2));
            setImcList((arr) => [... arr, {id:new Date().getTime(), imc:totalImc}])
            setImc(totalImc);
        }
        return imc;
    }
    return (
        <View style={styles.formContext}>
            {
                imc== null?
                <Pressable onPress={Keyboard.dismiss} style={styles.formulario}>
                <Text>Entre com sua Altura: </Text>
                <Text style={styles.errorMessage}>{msgErro}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex: 1.71"
                    keyboardType="numeric" />

                <Text>Entre com seu Peso: </Text>
                <Text style={styles.errorMessage}>{msgErro}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex: 80.5"
                    keyboardType="numeric" />

                <TouchableOpacity
                    style={styles.buttonCalc}
                    onPress={() => calculaIMC()}>
                        <Text style={styles.textButtonCalc}>{textButton}</Text>
                </TouchableOpacity>
            </Pressable>
        :
        <View style={styles.exibeImc}>

            <ResultadoIMC mensagemResultado={msg} valorResultado={imc} />

            <TouchableOpacity
                    style={styles.buttonCalc}
                    onPress={() => calculaIMC()}>
                        <Text style={styles.textButtonCalc}>{textButton}</Text>
                </TouchableOpacity>
        </View>
        }
        <FlatList
        showsVerticalScrollIndicator={false}
            style={styles.listaImc}
            data={imcList.reverse()}
            renderItem = {({item}) => {
                return(
                    <Text style={styles.itemListaImc}>
                        <Text style={styles.textItemImc}>IMC:</Text>
                        {item.imc}
                    </Text>
                );
            }}
            keyExtractor={(item) => item.id}
        >
        </FlatList>
        </View>
    )
}
