import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#a95995',
        justifyContent: 'center',
        paddingLeft: 16,
    },
    text: {
        fontSize: 50,
        color: '#ffffff',
    },
});

type Componente1Props = {
    //colocar ponto de interrogação para identificar quando um parâmetro não é obrigatório
    num1: number;
    num2: number;
}

const Componente1 = ({num1, num2}: Componente1Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{num1}</Text>
            <Text style={styles.text}>{num2}</Text>
        </View>
    );
}

export default Componente1;