
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './screens/Inicio';
import ListaServicios from './screens/ListaServicios';
import SolicitudCitas from './screens/SolicitudCitas';
import NotFound from './screens/NotFound';
import FormularioDatosPaciente from './screens/FormularioDatosPaciente';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="ListaServicios" component={ListaServicios} />
        <Stack.Screen name="SolicitudCitas" component={SolicitudCitas} options={{ title: 'Solicitud de Citas' }} />
        <Stack.Screen name="FormularioDatosPaciente" component={FormularioDatosPaciente} options={{ title: 'Datos Paciente' }} />
        <Stack.Screen name="NotFound" component={NotFound} options={{ title: 'ERROR 404' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;