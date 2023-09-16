import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        backgroundColor: '#a32145',
        justifyContent: 'center',
        paddingLeft: 16,
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
    },
});

type HeaderProps = {
    //colocar ponto de interrogação para identificar quando um parâmetro não é obrigatório
    title: string;
}

const Header = ({title}: HeaderProps) => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default Header;