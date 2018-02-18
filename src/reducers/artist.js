import { TEST_ACTION } from "../actions/artist";

const initialState = {
  test: "test begins"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TEST_ACTION": {
      return Object.assign({}, state, {
        test: "THE TEST IS OVER"
      });
    }
    default:
      return state;
  }
}
