import { Buy_ICE_CREAM } from './iceCreamTypes';

const initStat = {
  iceCreamNumber: 20,
};

const iceCreamReducer = (stat = initStat, action) => {
  switch (action.type) {
    case Buy_ICE_CREAM:
      return { ...stat, iceCreamNumber: stat.iceCreamNumber - 1 };

    default:
      return stat;
  }
};

export default iceCreamReducer;
