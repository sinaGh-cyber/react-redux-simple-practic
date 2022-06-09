import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeActions';

const HookCakeContainer = () => {
  const cakeNumber = useSelector((stat) => stat.cake.cakeNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Number of cakes:{cakeNumber}</div>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        buy cake
      </button>
    </div>
  );
};

export default HookCakeContainer;
