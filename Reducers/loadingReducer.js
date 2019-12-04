import { SET_LOADING } from "./actionConstants";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        isloading: action.payload
      };
    default:
      return state;
  }
};
