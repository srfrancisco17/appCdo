import * as React from 'react';
import { View, Text } from 'react-native';
import { Icon, Input  } from 'react-native-elements';

function FormularioDatosPaciente(){
	return(
		<View>
      <Input
        label="DOCUMENTO"
        placeholder=''
      />
		</View>
	);
}

export default FormularioDatosPaciente;