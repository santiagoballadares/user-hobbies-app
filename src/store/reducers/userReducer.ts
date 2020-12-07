import cloneDeep from 'lodash/cloneDeep';
import * as userActionTypes from '../actions/userTypes';
import * as hobbyActionTypes from '../actions/hobbyTypes';

const initialState: UsersState = {
  list: [],
  selectedUser: null,
}

let selectedUser: IUser;
let userIndex: number;

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
    case userActionTypes.SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload.user,
      };
    case hobbyActionTypes.ADD_HOBBY:
      if (!state.selectedUser) {
        return state;
      }
      const { hobby } = action.payload;
      selectedUser = cloneDeep(state.selectedUser);
      userIndex = state.list.findIndex(user => user.id === selectedUser.id);
      selectedUser.hobbies = [hobby, ...selectedUser.hobbies];
      return {
        ...state,
        list: [...state.list.slice(0, userIndex), selectedUser, ...state.list.slice(userIndex + 1)],
        selectedUser,
      };
    case hobbyActionTypes.DELETE_HOBBY:
      if (!state.selectedUser) {
        return state;
      }
      const { hobbyId } = action.payload;
      selectedUser = cloneDeep(state.selectedUser);
      userIndex = state.list.findIndex(user => user.id === selectedUser.id);
      const hobbyIndex = selectedUser.hobbies.findIndex(hobby => hobby.id === hobbyId);
      selectedUser.hobbies = [...selectedUser.hobbies.slice(0, hobbyIndex), ...selectedUser.hobbies.slice(hobbyIndex + 1)];
      return {
        ...state,
        list: [...state.list.slice(0, userIndex), selectedUser, ...state.list.slice(userIndex + 1)],
        selectedUser,
      };
    default:
      return state;
  }
};

export default reducer;
