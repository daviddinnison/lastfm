import { GET_ARTIST_SUCCESS } from "../actions/artist";

const initialState = {
  similarArtists: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTIST_SUCCESS": {
      console.log("INSIDE REDUCER", action.data);
      return Object.assign({}, state, {
        similarArtists: action.data
      });
    }
    default:
      return state;
  }
}
