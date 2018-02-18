const API_KEY = "a6be694f222c3e5ee8f11ab1c626bd00";

export const TEST_ACTION = "TEST_ACTION";
export const testAction = () => ({
  type: TEST_ACTION
});

export const getArtist = userInput => dispatch => {
  // dispatch(getHourlyForecastRequest());
  console.log('made it to the action')
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
      console.log("succesful artist GET", data);
      // dispatch(getHourlyForecastSuccess(data.hourly_forecast));
    })

    .catch(err => {
        console.log('ended up in a error catch')
      // dispatch(getHourlyForecastError(err));
    });
};
