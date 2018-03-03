import {
  GET_SIMILAR_ARTIST_SUCCESS,
  SAVE_ORIGINAL_ARTIST,
  GET_ARTIST_INFO_REQUEST,
  GET_ARTIST_INFO_SUCCESS,
  GET_TAG_COMPARISON_SUCCESS,
  GET_TOP_TRACKS_REQUEST,
  GET_TOP_TRACKS_SUCCESS,
  GET_TOP_ALBUMS_REQUEST,
  GET_TOP_ALBUMS_SUCCESS
} from "../actions/artist";

const initialState = {
  baseComparisonTags: [],
  loading: { artistInfo: true, topAblums: true, topTracks: true },
  orginalArtist: "",
  similarArtists: [],
  similarArtistInfo: {
    bio: {},
    tags: { tag: [{ name: "" }] },
    name: "",
    image: [["#text"]]
  },
  similarArtistTopAlbums: [],
  similarArtistTopTracks: [{ name: "" }]
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
    case "GET_ARTIST_INFO_REQUEST": {
      return Object.assign({}, state, {
        loading: {
          ...state.loading,
          artistInfo: true,
        }
      });
    }
    case "GET_ARTIST_INFO_SUCCESS": {
      return Object.assign({}, state, {
        similarArtistInfo: action.artistInfo,
        loading: {
          ...state.loading,
          artistInfo: false
        }
      });
    }
    case "GET_TAG_COMPARISON_SUCCESS": {
      return Object.assign({}, state, { baseComparisonTags: action.data });
    }
    case "GET_TOP_TRACKS_REQUEST": {
      return Object.assign({}, state, {
        loading: {
          ...state.loading,
          topTracks: true
        }
      });
    }
    case "GET_TOP_TRACKS_SUCCESS": {
      return Object.assign({}, state, {
        similarArtistTopTracks: action.data,
        loading: {
          ...state.loading,
          topTracks: false
        }
      });
    }
    case "GET_TOP_ALBUMS_REQUEST": {
      return Object.assign({}, state, {
        loading: {
          ...state.loading,
          topAlbums: true
        }
      });
    }
    case "GET_TOP_ALBUMS_SUCCESS": {
      return Object.assign({}, state, {
        similarArtistTopAlbums: action.data,
        loading: {
          ...state.loading,
          topAlbums: false
        }
      });
    }
    default:
      return state;
  }
}
