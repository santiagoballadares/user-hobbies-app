import * as userActionTypes from './userTypes';

const mockedUsers = [
  { id: 1, name: 'Ian' },
  { id: 2, name: 'Stephanie' },
  { id: 3, name: 'Steven' },
  { id: 4, name: 'Jimmy' },
  { id: 5, name: 'Chuck' },
  { id: 6, name: 'Sandra' },
  { id: 7, name: 'James' },
  { id: 8, name: 'Anne' },
  { id: 9, name: 'Joe' },
  { id: 10, name: 'Alice' },
];

export function fetchUsers() {
  const action: UsersAction = {
    type: userActionTypes.FETCH_USERS,
    payload: { users: mockedUsers },
  };
  return (dispatch: DispatchType) => dispatch(action);
}

export function addUser(user: IUser) {
  const action: UserAction = {
    type: userActionTypes.ADD_USER,
    payload: { user },
  };
  return (disptach: DispatchType) => disptach(action);
}
