import { OTHER_ACTION } from "../actions/other";

const initialState = {
  other: null
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
