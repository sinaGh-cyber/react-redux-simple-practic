import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeActions';

const CakeContainerWithPayload = () => {
  const cakeNumber = useSelector((stat) => stat.cake.cakeNumber);
  const dispatch = useDispatch();
  const [buyNumber, setBuyNumber] = useState(0);
  return (
    <div>
      <div>Number of cakes:{cakeNumber}</div>
      <input
        type="number"
        value={buyNumber}
        onChange={({ target }) => {
          setBuyNumber(target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(buyCake(buyNumber));
        }}
      >
        buy {buyNumber} cake
      </button>
    </div>
  );
};

export default CakeContainerWithPayload;
