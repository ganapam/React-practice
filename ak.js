import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import ThunkMiddleware
import axios from 'axios';

const ak = () => {
  const initialState = {
    loading: false,
    users: [],
    error: '',
  };

  const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
  const FETCH_USERES_SUCESS = 'FETCH_USERES_SUCESS';
  const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

  const fetchusersrequst = () => ({ type: FETCH_USERS_REQUEST });
  const fetchusersucess = (users) => ({ type: FETCH_USERES_SUCESS, payload: users });
  const fetchuserfailure = (error) => ({ type: FETCH_USERS_FAILURE, payload: error });

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USERES_SUCESS:
        return {
          loading: false,
          users: action.payload,
          error: '',
        };
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const fetchusers = () => {
    return function (dispatch) {
      dispatch(fetchusersrequst());
      // Using axios.get to fetch users
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const users = response.data.map((user) => user.name);
          dispatch(fetchusersucess(users));
        })
        .catch((error) => {
          dispatch(fetchuserfailure(error.message));
        });
    };
  };

  // Apply ThunkMiddleware when creating the store
  const store = createStore(reducer, applyMiddleware(thunk));

  store.subscribe(() => {
    console.log(store.getState());
  });

  // Dispatch the fetchusers action
  store.dispatch(fetchusers());

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default ak;
