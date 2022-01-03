import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, Imagem, StyleSheet} from 'react-native';
import {TextInput, Button, Card, Title, SafeAreaView} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

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
      <View style={styles.container}>
        {props.loading && <Text>Cargando </Text>}
        <Text
          style={styles.addCrypto}
          onPress={() => props.navigation.navigate('Add')}>
          + Add Crypto Current
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCrypto: {
    color: '#385775',
    fontSize: 16,
  },
});

export default connect(mapStateToProps)(Home);
