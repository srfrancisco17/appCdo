import React, {useState} from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem, Icon, SearchBar, Button } from 'react-native-elements';


const list = [
  {
    title: 'CIRUGIA DE TORAX',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR REUMATOLOGIA',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR OTORRINOLARINGOLOGIA',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR CIRUGIA PLASTICA',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR CIRUGIA PLASTICA MAXILO-FACIAL',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR CIRUGIA VASCULAR',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR INFECTOLOGIA',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR MEDICINA GENERAL',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR INTERNISTA NEUMOLOGO',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR DERMATOLOGIA',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR OFTALMOLOGIA',
    icon: 'medkit'
  },
  {
    title: 'CONSULTA POR ORTOPEDIA ONCOLOGIA',
    icon: 'medkit'
  },
  {
    title: 'CUIDADOS PALIATIVOS',
    icon: 'medkit'
  },
]

const SolicitudCitas = ({navigation}) => {

	return(
		<View style={{flex: 1, flexDirection: "column"}}>
      <View style={{ flex: 1}}>
        <SearchBar
          placeholder="Buscar tipo de consulta..."
          lightTheme={true}
        />
      </View>
      <View style={{ flex: 7}}>
        <ScrollView>
        {
        list.map((item, i) => (
          <TouchableOpacity 
            key={i}
            onPress={ ()=> navigation.navigate('FormularioDatosPaciente') }
          >
            <ListItem bottomDivider>
              <Icon
                name={item.icon} 
                type="font-awesome-5"
              />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        ))
        }
        </ScrollView>
      </View>
      <View style={{ flex: 1, marginTop:10}}>
        <Button title="Volver" onPress={() => navigation.goBack()} containerViewStyle={{width: '100%'}}/>
      </View>
		</View>
	);
}

export default SolicitudCitas;