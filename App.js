// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, ListItem, Input, Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen({ navigation }) {
  return (
    <ThemeProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1,  flexDirection: "column" }} >
          <Card>
            <Card.Title>Clinica de Occidente S.A</Card.Title>
              <Card.Image 
                source={{
                  uri:"https://www.eltiempo.com/files/article_main/uploads/2018/07/23/5b565c86b6cab.jpeg"
                }}
              />
              <Card.Divider/>
              <Text style={{marginBottom: 10}}>
              Prestar servicios integrales de salud de mediana y alta complejidad con enfoque en las especialidades de Oncología y Cardiología.
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Acceder' />
          </Card>
        </View>
        <View style={{ flex: 1,  flexDirection: "column" }} >
        <Card>
          <Card.Title>Angiografia de Occidente</Card.Title>
            <Card.Image 
              source={{
                uri:"https://www.hunterdouglas.cl/ap/img/cl/enews_imagenes/675x440-1/enews_imagenes_imagen_6323.JPG"
              }}
            />
            <Card.Divider/>
            <Text style={{marginBottom: 10}}>
            Prestar servicios integrales de salud de mediana y alta complejidad con enfoque en las especialidades de Oncología y Cardiología.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => navigation.navigate('Details')}
              title='Acceder' />
        </Card>
      </View>
      </View>
    </ThemeProvider>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
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