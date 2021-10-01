import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'Solicitud de citas',
		icon: 'calendar-plus-o',
		screen: 'SolicitudCitas',
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

const Item = ({ title, icon, navigation, screen }) => (
	<TouchableOpacity 
		style={styles.item} 
		onPress={()=>navigation.navigate((screen||'NotFound'))}
	>
		<Text style={styles.title}><Icon name={icon} size={50} /> {title}</Text>
	</TouchableOpacity>
);


function ListaServicios({navigation, route}) {
	const { infoempresa } = route.params;

	useEffect(() => {
		// alert("hola");
		// console.log(infoempresa);
		navigation.setOptions({ title: infoempresa.name });
	});

	const renderItem = ({ item }) => (
		<Item title={item.title} icon={item.icon} navigation={navigation} screen={item.screen} />
	); 

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>      
			<Button title="Volver" onPress={() => navigation.goBack()} containerViewStyle={{width: '50%', height: 500}}/>
		</View>
	);
}

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

export default ListaServicios;