import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../../redux/iceCreame/iceCreamActions';

const IceCreamContainer = () => {
  const iceCreamNumber = useSelector((stat) => stat.iceCream.iceCreamNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Number of ice creme:{iceCreamNumber}</div>
      <button
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        buy ice cream
      </button>
    </div>
  );
};

export default IceCreamContainer;
