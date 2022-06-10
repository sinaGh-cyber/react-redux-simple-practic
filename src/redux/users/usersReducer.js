import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './usersTypes';

const initStat = {
  isLoading: false,
  error: '',
  users: [],
};
const usersReducer = (stat = initStat, action) => {
  switch (action.type) {
    case FETCH_USERS_FAILURE:
      return { users: [], error: action.payload, isLoading: false };

    case FETCH_USERS_SUCCESS:
      return { error: '', users: action.payload, isLoading: false };

    case FETCH_USERS_REQUEST:
      return { ...stat, isLoading: true };

    default:
      return stat;
  }
};
export default usersReducer;
