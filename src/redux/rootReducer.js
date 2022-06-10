import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCreame/iceCreamReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: usersReducer,
});

export default rootReducer;
