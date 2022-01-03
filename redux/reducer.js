const initializeState = {
  cryptos: ['BTC', 'ETH', 'XRP'],
  prices: [],
  loading: false,
};

function reducer(state = initializeState, action) {
  switch (action.type) {
    case 'GET_PRICE_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_PRICE':
      return {
        ...state,
        prices: action.payload,
        loading: false
      };
    case 'ADD_CRYPTO':
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return {...state};
  }
}

export default reducer;
