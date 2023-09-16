import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ActivityIndicator, FlatList, Text, Image, StyleSheet } from "react-native";
import { useCallback } from "react";
import axios from "axios";

type ListItemProps = {
    country: {
        flags: {png: string};
        name: {common: string},
        capital: any,
        region: string,
        languages: any,
    }
}

type ListRowProps = {
 
    id: string,
    value: string,

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#59c8ed'
    },
    header: {
        padding: 10,
        backgroundColor: '#235bb3',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
    },
    listItem: {
        padding: 12,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#4aadcc',
        flexDirection:'row',
    },
    countryImage: {
        height: '100%', 
        width:'40%',
        resizeMode: 'contain',
    },
    listRow: {
        columnGap: 5,
        flexDirection: 'row',
    },
    listRowId: {
        fontWeight: 'bold',
        color: '#000',
    },
    rowContainer: {
        margin: 10,
        paddingRight: 10
    },
});

const ListRow = ({id , value}: ListRowProps) => {
    return(
        <View style={styles.listRow}>
            <Text style={styles.listRowId}>{id}</Text>
            <Text>{value}</Text>
        </View>
    );
};

const ListItem = ({country}: ListItemProps) => {

    return(
        <View style={styles.listItem}>
            <Image
                style={styles.countryImage}
                source={{uri: country.flags.png}}
            />
            <View style={styles.rowContainer}>
                <ListRow  id={"Nome do País:"} value={country.name.common}/>
                <ListRow  id={"Capital:"} value={country.capital ? country.capital[Object.keys(country.capital)[0]] : "-"}/>
                <ListRow  id={"Região:"} value={country.region}/>
                <ListRow  id={"Língua:"} value={country.languages[Object.keys(country.languages)[0]]}/>
            </View>
        </View>
    )
}

const ListPage = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    //useCallBack considera os dados armazenados em cache e executa apenas quando alterado  
    const getCountriesData = useCallback(async () => {
        try {
            setLoading(true)
            const {data} = await axios.get("https://restcountries.com/v3.1/all/")
            setCountries(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    //chamar na montagem do componente
    useEffect(() => {
        getCountriesData()
    }, [])

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Lista de Países</Text>
            </View>
            <View>
                {loading === true ? <ActivityIndicator size={"large"}/> : <FlatList data={countries} renderItem={({item}) => <ListItem country={item}/>}/>}
            </View>
        </SafeAreaView>
    );
}

export default ListPage;