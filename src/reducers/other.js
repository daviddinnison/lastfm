import { OTHER_ACTION } from "../actions/other";

const initialState = {
  other: "the other test begins"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "OTHER_ACTION": {
      return Object.assign({}, state, {
        other: "THE OTHER TEST IS OVER"
      });
    }
    default:
      return state;
  }
}
