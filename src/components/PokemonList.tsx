import { Text, View } from "react-native"

type Pokemon = {
    name: string,
    //tipar com caracteres específicos
    type: string
}

type PokemonListProps = {
    pokemons: Pokemon[]
}

const PokemonList = ({pokemons}: PokemonListProps) => {
    return (
        <View>
            {/* Map para percorrer o arary de pokemons. o objeto de iteraçao derá 'pokemon' */}
            {pokemons.map(pokemon => (
                <View>
                    <Text>{pokemon.name}</Text>
                    <Text>{pokemon.type}</Text>
                </View>
            ))}
        </View>
    );
}

export default PokemonList;