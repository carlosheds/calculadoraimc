import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        alignItems:"center",
        backgroundColor:"#fff",
        marginTop:20,
        paddingTop:15,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },

    formulario: {
        width:"100%",
        padding:10,
    },
    formInput: {
        width:"90%",
        height:40,
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        margin:12,
        paddingLeft:10,
    },
    textButtonCalc: {
        fontSize:20,
        color:"#fff",
    },
    buttonCalc: {
        width:"90%",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ff0042",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    errorMessage: {
        fontSize:12,
        fontWeight:"bold",
        color:"red",
        paddingLeft:20
    },
    exibeImc: {
        width:"100%",
        height:"50%",
    },
    listaImc: {
        marginTop:20,
    },
    itemListaImc: {
        fontSize:28,
        color:"red",

    },
    textItemImc: {
        color:"red",
        fontSize:16,
    }
});

export default styles;