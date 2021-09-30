import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { Icon, Input  } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

// function FormularioDatosPaciente(){

const FormularioDatosPaciente = () => {
  const [text, setText] = React.useState('');

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);  


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };  

	return(
		<View>
      <TextInput
        label="Primer Nombre"
        value={text}
        onChangeText={text => setText(text)}
      /> 
      <TextInput
        label="Segundo Nombre"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Primer Apellido"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Segundo Apellido"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button onPress={showDatepicker} title="Show date picker!" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}      
		</View>
	);
}

export default FormularioDatosPaciente;