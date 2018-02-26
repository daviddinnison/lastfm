const API_KEY = "a6be694f222c3e5ee8f11ab1c626bd00";
import { Actions } from "react-native-router-flux";

export const TEST_ACTION = "TEST_ACTION";
export const testAction = () => ({
  type: TEST_ACTION
});

export const GET_ARTIST_SUCCESS = "GET_ARTIST_SUCCESS";
export const getArtistSuccess = (data) => ({
  type: GET_ARTIST_SUCCESS,
  data
});

export const getArtist = userInput => dispatch => {
  // dispatch(getHourlyForecastRequest());
  console.log('made it to the getArtist action')
  fetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${userInput}&api_key=${API_KEY}&format=json`,
    {}
  )
    .then(res => {
      if (!res.ok) {
          console.log('bad response')
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(getArtistSuccess(data.similarartists.artist))
      Actions.similarArtists();
    })

    .catch(err => {
        console.log('ended up in a error catch')
      // dispatch(getHourlyForecastError(err));
    });
};
