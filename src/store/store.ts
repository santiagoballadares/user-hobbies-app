import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialStore = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialStore,
  compose(
    applyMiddleware(...middleware),
    //composeWithDevTools(), // It's working only with firefox
  ),
);

export default store;
