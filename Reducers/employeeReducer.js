import {
  GET_ALL_EMPLOYEE,
  SET_ALL_EMPLOYEE,
  GET_EMPLOYEE_BYID,
  UPDATE_EMPLOYEE_BYID
} from "./actionConstants";

export default (state = [], action = {}) => {
  switch (action.type) {
    case GET_ALL_EMPLOYEE:
      return state;
    case SET_ALL_EMPLOYEE:
      state = action.payload;
      return state;
    case GET_EMPLOYEE_BYID:
      const index = state.findIndex(
        item => parseInt(item.id) === parseInt(action.payload.id)
      );
      if (index > -1) {
        return state.map(item => {
          if (parseInt(item.id) === parseInt(action.payload.id))
            return action.payload;
          return item;
        });
      } else {
        return [...state, action.payload];
      }
    case UPDATE_EMPLOYEE_BYID:
      return state.map(item => {
        if (parseInt(item.id) === parseInt(action.payload.id))
          return action.payload;
        return item;
      });

    default:
      return state;
  }
};
