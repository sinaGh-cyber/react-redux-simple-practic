import { connect } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeActions';

const CakeContainer = (props) => {
  return (
    <div>
      <div>Number of cakes:{props.cakeNumber}</div>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};

const mapStatToProps = (stat) => {
  return {
    cakeNumber: stat.cakeNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStatToProps, mapDispatchToProps)(CakeContainer);
