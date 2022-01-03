import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, Imagem, StyleSheet} from 'react-native';
import {TextInput, Button, Card, Title, SafeAreaView} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, AddCrypto} from '../style/Home';
import ListItem from '../components/ListItem';
import {getMarketData} from '../services';
import Header from './Header';
const mapStateToProps = state => {
  return {store: state};
};
const Home = props => {
  const [data, setData] = useState({
    cryptosUser: props.store.cryptos,
    loading: props.store.loading,
  });

  useEffect(() => {
    console.log(data);
    getMarketData(data.cryptosUser, props.dispatch);
  }, [data]);

  return (
    <View>
      <Header />

      <FlatList
        keyExtractor={item => item.id}
        data={props.store.prices}
        renderItem={({item}) => (
          <ListItem
            name={item.name}
            xx
            symbol={item.symbol}
            currentPrice={item.price}
            priceChangePercentage24hs={item.percent_change_usd_last_24_hours}
            logoUrl={item.logoUrl}
          />
        )}
      />
      <Container>
        {props.loading && <Text>Cargando </Text>}
        <AddCrypto onPress={() => props.navigation.navigate('Add')}>
          + Add Crypto Current
        </AddCrypto>
      </Container>
    </View>
  );
};

export default connect(mapStateToProps)(Home);
