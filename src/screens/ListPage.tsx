import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, ActivityIndicator, FlatList, Text } from "react-native";
import MyButton from "../components/MyButton";
import { useCallback } from "react";
import axios from "axios";

type ListItemProps = {
    university: {
        name: string;
        web_pages: string[];
    }
}

const ListItem = ({university}: ListItemProps) => {
    return(
        <View>
            <Text>{university.name}</Text>
            <Text>{university.web_pages[0]}</Text>
        </View>
    )
}

const ListPage = () => {
    const [universities, setUniversities] = useState([])
    const [loading, setLoading] = useState(false)

    //useCallBack considera os dados armazenados em cache e executa apenas quando alterado  
    const getUniversityData = useCallback(async () => {
        try {
            setLoading(true)
            const {data} = await axios.get("http://universities.hipolabs.com/search?country=brazil")
            setUniversities(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    //chamar na montagem do componente
    useEffect(() => {
        getUniversityData()
    }, [])

    return (
        <SafeAreaView>
            <View>
                {loading === true ? <ActivityIndicator size={"large"}/> : <FlatList data={universities} renderItem={({item}) => <ListItem university={item}/>}/>}
            </View>
        </SafeAreaView>
    );
}

export default ListPage;