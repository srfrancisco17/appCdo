import * as React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function EmpresaCard(props){
  return(

		<View style={{ flex: 1,  flexDirection: "column" }} >
			<Card>
				<Card.Title>{props.infoempresa.name}</Card.Title>
					<Card.Image 
						source={{
							uri:props.infoempresa.image
						}}
					/>
					<Card.Divider/>
					<Text style={{marginBottom: 10}}>{props.infoempresa.description}</Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={() => props.navigation.navigate('Details', {
            infoempresa: props.infoempresa
          })}
          title='Acceder' /> 
        </Card>
		</View>

 
  )
}