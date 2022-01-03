export const GET_PRICE = data => {
  return {type: 'GET_PRICE', payload: data};
};

export const ADD_CRYPTO = data => {
    return {type: 'ADD_CRYPTO', payload: data};
};

export const GET_PRICE_LOADING = data => {
    return {type: 'GET_PRICE_LOADING'};
};
  