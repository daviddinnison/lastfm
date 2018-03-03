import { Actions } from "react-native-router-flux";
const API_KEY = "a6be694f222c3e5ee8f11ab1c626bd00";
const API_BASE_URL = "http://ws.audioscrobbler.com/2.0/";

export const GET_SIMILAR_ARTIST_SUCCESS = "GET_SIMILAR_ARTIST_SUCCESS";
export const getSimilarArtistSuccess = (similarArtists) => ({
  type: GET_SIMILAR_ARTIST_SUCCESS,
  similarArtists
});

export const SAVE_ORIGINAL_ARTIST = "SAVE_ORIGINAL_ARTIST";
export const saveOriginalArtist = (originalArtist) => ({
  type: SAVE_ORIGINAL_ARTIST,
  originalArtist
});

export const getSimilarArtist = userInput => dispatch => {
  // dispatch(getHourlyForecastRequest());
  fetch(
    `${API_BASE_URL}?method=artist.getsimilar&artist=${userInput}&api_key=${API_KEY}&format=json`,
    {}
  )
    .then(res => {
      if (!res.ok) {
        console.log("bad response");
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      console.log(data, "DATA being passed in")
      console.log("USER INPUT that is being passed in ", userInput)
      console.log("WHAT SHOULD be the similar artist being passed in", data.similarartists.artist)
      dispatch(saveOriginalArtist(userInput));
      dispatch(getSimilarArtistSuccess(data.similarartists.artist));
      dispatch(getTagComparison(userInput))
      dispatch(getTopTracks(userInput));
      dispatch(getTopAlbums(userInput));
      Actions.similarArtists();
    })

    .catch(err => {
      console.log("ended up in a error catch", err);
      // dispatch(getHourlyForecastError(err));
    });
};

export const GET_ARTIST_INFO_REQUEST = "GET_ARTIST_INFO_REQUEST";
export const getArtistInfoRequest = () => ({
  type: GET_ARTIST_INFO_REQUEST,
});

export const GET_ARTIST_INFO_SUCCESS = "GET_ARTIST_INFO_SUCCESS";
export const getArtistInfoSuccess = (artistInfo) => ({
  type: GET_ARTIST_INFO_SUCCESS,
  artistInfo
});

export const getArtistInfo = userInput => dispatch => {
  // dispatch(getHourlyForecastRequest());
  fetch(
    `${API_BASE_URL}?method=artist.getInfo&artist=${userInput}&api_key=${API_KEY}&format=json`,
    {}
  )
    .then(res => {
      if (!res.ok) {
        console.log("bad response");
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(getArtistInfoSuccess(data.artist));
      // dispatch(getTagComparison(userInput));
      // dispatch(getTopTracks(userInput));
      // dispatch(getTopAlbums(userInput));
    })

    .catch(err => {
      console.log("ended up in a error catch", err);
      // dispatch(getHourlyForecastError(err));
    });
};

export const GET_TAG_COMPARISON_SUCCESS = "GET_TAG_COMPARISON_SUCCESS";
export const getTagComparisonSuccess = data => ({
  type: GET_TAG_COMPARISON_SUCCESS,
  data
});


export const getTagComparison = userInput => dispatch => {
  // dispatch(getHourlyForecastRequest());
  fetch(
    `${API_BASE_URL}?method=artist.getinfo&artist=${userInput}&api_key=${API_KEY}&format=json`,
    {}
  )
    .then(res => {
      if (!res.ok) {
        console.log("bad response");
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(getTagComparisonSuccess(data.artist.tags));
    })

    .catch(err => {
      console.log("ended up in a error catch", err);
      // dispatch(getHourlyForecastError(err));
    });
};

export const GET_TOP_TRACKS_REQUEST = "GET_TOP_TRACKS_REQUEST";
export const getTopTracksRequest = () => ({
  type: GET_TOP_TRACKS_SUCCESS,
});

export const GET_TOP_TRACKS_SUCCESS = "GET_TOP_TRACKS_SUCCESS";
export const getTopTracksSuccess = data => ({
  type: GET_TOP_TRACKS_SUCCESS,
  data
});


export const getTopTracks = userInput => dispatch => {
  dispatch(getTopTracksRequest());
  fetch(
    `${API_BASE_URL}?method=artist.gettoptracks&artist=${userInput}&api_key=${API_KEY}&format=json`,
    {}
  )
    .then(res => {
      if (!res.ok) {
        console.log("bad response");
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(getTopTracksSuccess(data.toptracks.track));
    })

    .catch(err => {
      console.log("ended up in a error catch", err);
      // dispatch(getHourlyForecastError(err));
    });
};

export const GET_TOP_ALBUMS_REQUEST = "GET_TOP_ALBUMS_REQUEST";
export const getTopAlbumsRequest = () => ({
  type: GET_TOP_ALBUMS_SUCCESS,
});

export const GET_TOP_ALBUMS_SUCCESS = "GET_TOP_ALBUMS_SUCCESS";
export const getTopAlbumsSuccess = data => ({
  type: GET_TOP_ALBUMS_SUCCESS,
  data
});


export const getTopAlbums = userInput => dispatch => {
  dispatch(getTopAlbumsRequest());
  fetch(`${API_BASE_URL}?method=artist.gettopalbums&artist=${userInput}&api_key=${API_KEY}&format=json`, {})
    .then(res => {
      if (!res.ok) {
        console.log("bad response");
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(getTopAlbumsSuccess(data.topalbums.album));
    })

    .catch(err => {
      console.log("ended up in a error catch", err);
      // dispatch(getHourlyForecastError(err));
    });
};