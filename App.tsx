// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React, { useEffect, useState } from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [contador, setContador] = useState(0);

//   useEffect(() => {
//       console.log('Montagem');
//   }, []);

//   useEffect(() => {
//     console.log('Atualização');
//   }, [contador]);

//   useEffect(() => {
//     return() => {
//       console.log('Desmontagem')
//     };
//   }, []);

//   const onPressButton = () => {
//     setContador(contador + 1)
//   };

//   return (
//     //renderiza apenas na aréa não cortável do celular
//     <SafeAreaView>
//       {/* configurar status bar do celular */}
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//       />
//       {/*Possibilita a inserção da barra de rolagem na tela*/}
//       <ScrollView contentInsetAdjustmentBehavior="automatic">
//         <Button title='+1 contador' onPress={onPressButton}/>
//         <Text style={{fontSize: 24}}>{contador}</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import React from "react";
import { Text } from "react-native/types";
import Home from "./src/screens/Home";
import RandomActivity from "./src/components/RandomActivity";
import ListPage from "./src/screens/ListPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryList from "./src/screens/CountryList";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  //return <RandomActivity/>;
  //return <ListPage/>;
  return <CountryList/>
  //return(
  //  <NavigationContainer>
  //    <Stack.Navigator>
  //      <Stack.Screen name="Home" component={Home}/>
  //    </Stack.Navigator>
  //  </NavigationContainer>
  //);  
}

export default App;
