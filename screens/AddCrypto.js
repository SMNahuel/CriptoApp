import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Header from './Header';
import {addCryptoCurrencie} from '../services';

const AddCrypto = props => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handlerAdd = async () => {
    let newContainer = props.cryptos;
    newContainer.push(input);
    await addCryptoCurrencie(newContainer, props.dispatch);
    setLoading(false);
    setInput("")
    props.navigation.navigate('Home')
    
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.back}
        onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.text}>{'<'} Back to list</Text>
      </TouchableHighlight>

      {!loading && (
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Add a Cryptocurrency</Text>
          <TextInput
            style={styles.textInput}
            label="Use a name or ticker symbol..."
            value={input}
            onChangeText={setInput}
            autoCapitalize="characters"
          />

          {input.length > 0 && (
            <TouchableHighlight style={styles.addButton}>
              <Text style={styles.textActive} onPress={() => handlerAdd()}>
                ADD
              </Text>
            </TouchableHighlight>
          )}
          {input.length === 0 && (
            <TouchableHighlight style={styles.addButton}>
              <Text style={styles.textDisable}>ADD</Text>
            </TouchableHighlight>
          )}
        </View>
      )}
      {loading && <Text> Espere</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: '#FAFBFC',
    padding: 10,
  },
  inputContainer: {
    height: '75%',
  },
  back: {
    flex: 1,
  },
  text: {
    color: '#385775',
  },
  textInput: {
    alignSelf: 'stretch',
    paddingLeft: 25,
    margin: 12,
    borderWidth: 1,
    borderColor: '#B7C0C6',
    borderRadius: 10,
  },
  title: {
    textAlign: 'left',
    color: '#212B36',
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
  },
  addButton: {
    margin: 10,
    backgroundColor: '#FBD24D',
    width: 100,
    height: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
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
