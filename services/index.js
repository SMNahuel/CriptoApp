import axios from 'axios';
import {GET_PRICE, GET_PRICE_LOADING, ADD_CRYPTO} from '../redux/actionCreator'

export const getMarketData = async (criptos, dispatch) => {
  dispatch(GET_PRICE_LOADING())
  const cryptoPrices = []
  for(let i = 0; i < criptos.length; i++){
    let response = await getPrice(criptos[i])
    cryptoPrices.push(response);
  }
  dispatch(GET_PRICE(cryptoPrices))
};

export const getPrice = async crypto => {
  try {
    let URL = `https://data.messari.io/api/v1/assets/${crypto}/metrics`;
    let config = {
      headers: {
        'x-messari-api-key': '355752fb-532d-4442-a823-03492037decf',
        'content-type': 'application/json',
      },
    };
    const response = await axios.get(URL, null, config);
    const cryptoInfo = {
      id: response.data.data.id,
      name: response.data.data.name,
      symbol: response.data.data.symbol,
      price: response.data.data.market_data.price_usd,
      percent_change_usd_last_24_hours: response.data.data.market_data.percent_change_usd_last_24_hours,
      logoUrl: `https://cryptoicons.org/api/icon/${response.data.data.symbol.toLowerCase()}/200`
    };
    return cryptoInfo
  } catch (error) {
    console.log(error.message);
  }
}

export const addCryptoCurrencie = async (newContainer, dispatch)=> {
  dispatch(ADD_CRYPTO(newContainer))
  getMarketData(newContainer, dispatch)
}