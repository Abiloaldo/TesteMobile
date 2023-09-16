import React from "react";
import Header from "../components/Header";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import PokemonList from "../components/PokemonList";

const Home = () => {   
    // const navigation = useNavigation()
    const pokemons = [
        {
            name: 'Pikachu',
            type: 'Eletric',   
        },
        {
            name: 'MagiKarp',
            type: 'Water',   
        },
        {
            name: 'Charizard',
            type: 'Fire',   
        }
    ];
    return(

        <SafeAreaView>
            <ScrollView>
                <StatusBar/>
                <Header title="Super Página"/>
                <PokemonList pokemons={pokemons}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;