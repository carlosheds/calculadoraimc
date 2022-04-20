import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function ResultadoIMC(resultado) {
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC é: " + resultado.valorResultado,
        });
    }

    return (
        <View style={styles.resultadoImc}>
            <View style={styles.boxShared}>
                <Text style={styles.informacao}>{resultado.mensagemResultado}</Text>
                <Text style={styles.numeroImc}>{resultado.valorResultado}</Text>
                <TouchableOpacity
                    onPress={onShare}
                    style={styles.botaoShared}>
                    <Text style={styles.textShared}>Share</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}