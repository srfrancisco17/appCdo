
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, ListItem, Input, Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import EmpresaCard from './components/EmpresaCard';


function HomeScreen({ navigation }) {

  const empresa1 = {
    name:'Clinica de Occidente',
    description:'Prestar servicios integrales de salud de mediana y alta complejidad con enfoque en las especialidades de Oncología y Cardiología.',
    image:'https://www.eltiempo.com/files/article_main/uploads/2018/07/23/5b565c86b6cab.jpeg'
  };

  const empresa2 = {
    name: 'Angiografia de Occidente', 
    description:'Nos comprometemos de corazón al cuidado de la salud de nuestros usuarios con liderazgo e innovación.',
    image:'https://www.hunterdouglas.cl/ap/img/cl/enews_imagenes/675x440-1/enews_imagenes_imagen_6323.JPG'
  }

  return (
    <ThemeProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
          <EmpresaCard infoempresa={empresa1} navigation={navigation} />
          <EmpresaCard infoempresa={empresa2} navigation={navigation} />
        </ScrollView>
      </View>
    </ThemeProvider>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Solicitud de citas',
    icon: 'calendar-plus-o',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Historia Clinica',
    icon: 'file-text',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Examenes',
    icon: 'file-pdf-o',
  },
];

const Item = ({ title, icon }) => (
    <TouchableOpacity onPress={()=>alert("prueba")}>
      <View style={styles.item}>
        
        <Text style={styles.title}><Icon name={icon} size={50} /> {title}</Text>
      </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 2,
  },
  title: {
    fontSize: 30,
  },
});

function DetailsScreen({navigation, route}) {
  const { infoempresa } = route.params;

  useEffect(() => {
    // alert("hola");
    // console.log(infoempresa);
    navigation.setOptions({ title: infoempresa.name });
  });

  const renderItem = ({ item }) => (
    <Item title={item.title} icon={item.icon} />
  ); 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />      
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;