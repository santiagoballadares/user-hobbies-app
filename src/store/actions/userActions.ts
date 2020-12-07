import * as userActionTypes from './userTypes';

const mockedUsers = [
  { id: 1, name: 'Ian', hobbies: [{ id: 1, description: 'Playing music', passion: 'High', year: 1960 }] },
  { id: 2, name: 'Stephanie', hobbies: [{ id: 1, description: 'Photography', passion: 'Very High', year: 2015 }, { id: 2, description: 'Trraveling', passion: 'High', year: 2010 }] },
  { id: 3, name: 'Steven', hobbies: [{ id: 1, description: 'Hiking', passion: 'Medium', year: 2016 }] },
  { id: 4, name: 'Jimmy', hobbies: [] },
  { id: 5, name: 'Chuck', hobbies: [] },
  { id: 6, name: 'Sandra', hobbies: [] },
  { id: 7, name: 'James', hobbies: [] },
  { id: 8, name: 'Anne', hobbies: [] },
  { id: 9, name: 'Joe', hobbies: [] },
  { id: 10, name: 'Alice', hobbies: [] },
];

export function fetchUsers() {
  const action: UsersAction = {
    type: userActionTypes.FETCH_USERS,
    payload: { users: mockedUsers },
  };
  return (dispatch: UserDispatchType) => dispatch(action);
}

export function addUser(user: IUser) {
  const action: UserAction = {
    type: userActionTypes.ADD_USER,
    payload: { user },
  };
  return (disptach: UserDispatchType) => disptach(action);
}

export function selectUser(user: IUser) {
  const action: UserAction = {
    type: userActionTypes.SELECT_USER,
    payload: { user },
  };
  return (disptach: UserDispatchType) => disptach(action);
}
