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
          <Title style={styles.title}>Add a Cryptocurrency</Title>
          <TextInput
            label="Use a name or ticker symbol..."
            value={input}
            onChangeText={setInput}
            autoCapitalize="characters"
          />

          {input.length > 0 && (
            <AddBoton onPress={() => handlerAdd()}>
              <Text style={styles.textActive}>ADD</Text>
            </AddBoton>
          )}
          {input.length === 0 && (
            <AddBoton>
              <Text style={styles.textDisable}>ADD</Text>
            </AddBoton>
          )}
        </InputContainer>
      ) : (
        <Text> Espere</Text>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  textActive: {
    color: '#385775',
  },
  textDisable: {
    color: '#EEEEEE',
  },
});
const mapStateToProps = state => {
  const {cryptos} = state;
  return {cryptos};
};

export default connect(mapStateToProps)(AddCrypto);
