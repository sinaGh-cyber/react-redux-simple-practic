import { BUY_CAKE } from './cakeTypes';

const initStat = {
  cakeNumber: 10,
};

const cakeReducer = (stat = initStat, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return { ...stat, cakeNumber: stat.cakeNumber - 1 };
    }

    default:
      return stat;
  }
};
 export default cakeReducer;