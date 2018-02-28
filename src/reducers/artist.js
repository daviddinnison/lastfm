import {
  GET_SIMILAR_ARTIST_SUCCESS,
  SAVE_ORIGINAL_ARTIST,
  GET_ARTIST_INFO_SUCCESS,
  GET_TAG_COMPARISON_SUCCESS,
  GET_TOP_TRACKS_SUCCESS
} from "../actions/artist";

const initialState = {
  baseComparisonTags: [],
  orginalArtist: "",
  similarArtists: [],
  similarArtistInfo: { bio: {}, tags: { tag: [{ name: "" }] }, name: "" },
  similarArtistTopTracks: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SIMILAR_ARTIST_SUCCESS": {
      return Object.assign({}, state, {
        similarArtists: action.similarArtists
      });
    }
    case "SAVE_ORIGINAL_ARTIST": {
      return Object.assign({}, state, {
        originalArtist: action.originalArtist
      });
    }
    case "GET_ARTIST_INFO_SUCCESS": {
      return Object.assign({}, state, {
        similarArtistInfo: action.artistInfo
      });
    }
    case "GET_TAG_COMPARISON_SUCCESS": {
      return Object.assign({}, state, { baseComparisonTags: action.data });
    }
    case "GET_TOP_TRACKS_SUCCESS": {
      return Object.assign({}, state, {
        similarArtistTopTracks: action.data
      });
    }
    default:
      return state;
  }
}
