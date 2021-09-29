import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import { ThemeProvider } from 'react-native-elements';
import EmpresaCard from '../components/EmpresaCard';

function Home({ navigation }) {
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

  export default Home;