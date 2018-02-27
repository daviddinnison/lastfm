import {
  GET_ARTIST_SUCCESS,
  GET_TAG_COMPARISON_SUCCESS
} from "../actions/artist";

const initialState = {
  baseComparisonTags: [],
  similarArtists: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTIST_SUCCESS": {
      return Object.assign({}, state, {
        similarArtists: action.similarArtists
      });
    }
    case "GET_TAG_COMPARISON_SUCCESS": {
      return Object.assign({}, state, {
        baseComparisonTags: action.data
      });
    }
    default:
      return state;
  }
}
