import { combineReducers } from 'redux';
import userReducer from './userReducer';

const reducers: any = combineReducers({
  users: userReducer,
});

export default reducers;
