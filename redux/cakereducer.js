// cakereducer.js
import { BUY_CAKES } from './cakeactions';

const initialState = {
  numberOfCakes: 40,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKES:
      return {
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

export default reducer;
