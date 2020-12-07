import * as userActionTypes from '../actions/userTypes';

const initialState: UsersState = {
  list: [],
}

const reducer = (
  state: UsersState = initialState,
  action: any
): UsersState => {
  switch (action.type) {
    case userActionTypes.FETCH_USERS:
      return {
        ...state,
        list: action.payload.users,
      };
    case userActionTypes.ADD_USER:
      return {
        ...state,
        list: [action.payload.user, ...state.list],
      };
    default:
      return state;
  }
};

export default reducer;
