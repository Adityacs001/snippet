import { SET_USER, GET_USER } from "./actionConstants";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: action.payload ? true : false,
        record: { ...action.payload }
      };
    case GET_USER:
      return state;
    default:
      return state;
  }
};
