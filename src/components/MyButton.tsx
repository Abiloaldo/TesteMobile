import React from "react";
import { Pressable, Text, View, StyleSheet, Button, Touchable, TouchableOpacity } from "react-native";

type MyButonProps = {
    title: string,
    onPress: () => void,
    color: string,
    subtitle: string
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 10,
        color: '#FFFFFF',
    },
    buttonContainer: {
        padding: 16,
    }
});

const MyButton = ({title, onPress, color, subtitle}: MyButonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.buttonContainer, backgroundColor:color}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>   
    );
}

export default MyButton;