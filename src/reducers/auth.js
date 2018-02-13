/*eslint-disable */
import {
    // SET_AUTH_TOKEN,
    // CLEAR_AUTH,
    // AUTH_REQUEST,
    // AUTH_SUCCESS,
    // AUTH_ERROR
    TEST_AUTH_ACTION
  } from "../actions/auth";
  /*eslint-enable */
  
  const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    loading: false,
    error: null
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "TEST_AUTH_ACTION": {
        console.log('you are in the auth reducer')
      return Object.assign({}, state, {
        test: "THE TEST IS OVER"
      });
    }
    //   case "SET_AUTH_TOKEN": {
    //     return Object.assign({}, state, {
    //       authToken: action.authToken
    //     });
    //   }
  
    //   case "CLEAR_AUTH": {
    //     return Object.assign({}, state, {
    //       authToken: null,
    //       currentUser: null
    //     });
    //   }
  
    //   case "AUTH_REQUEST": {
    //     return Object.assign({}, state, {
    //       loading: true,
    //       error: null
    //     });
    //   }
  
    //   case "AUTH_SUCCESS": {
    //     return Object.assign({}, state, {
    //       loading: false,
    //       currentUser: action.currentUser
    //     });
    //   }
  
    //   case "AUTH_ERROR": {
    //     return Object.assign({}, state, {
    //       loading: false,
    //       error: action.error
    //     });
    //   }
      default:
        return state;
    }
  }
  