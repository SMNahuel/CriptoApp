import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import Header from './Header';
import {addCryptoCurrencie} from '../services';

import {
  Container,
  InputContainer,
  TextBack,
  AddBoton,
  Title,
  TextInput,
  BotonBack,
  TextActive,
  TextDisable
} from '../style/AddCrypto';

const AddCrypto = props => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handlerAdd = async () => {
    let newContainer = props.cryptos;
    newContainer.push(input);
    await addCryptoCurrencie(newContainer, props.dispatch);
    setLoading(false);
    setInput('');
    props.navigation.navigate('Home');
  };
  return (
    <Container>
      <BotonBack>
        <TextBack onPress={() => props.navigation.navigate('Home')}>
        {'<'} Back to list
        </TextBack>
      </BotonBack>
      {!loading ? (
        <InputContainer>
          <Title>Add a Cryptocurrency</Title>
          <TextInput
            label="Use a name or ticker symbol..."
            value={input}
            onChangeText={setInput}
            autoCapitalize="characters"
          />

          {input.length > 0 && (
            <AddBoton onPress={() => handlerAdd()}>
              <TextActive>ADD</TextActive>
            </AddBoton>
          )}
          {input.length === 0 && (
            <AddBoton>
              <TextDisable>ADD</TextDisable>
            </AddBoton>
          )}
        </InputContainer>
      ) : (
        <Text> Espere</Text>
      )}
    </Container>
  );
};


const mapStateToProps = state => {
  const {cryptos} = state;
  return {cryptos};
};

export default connect(mapStateToProps)(AddCrypto);
