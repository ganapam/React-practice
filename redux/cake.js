import { buyCakes } from './cakeactions';
import { connect } from 'react-redux';

const Cake = (props) => {
  return (
    <div>
      <h1>Number of cakes - {props.numberOfCakes}</h1>
      <button onClick={props.buyCakes}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () => dispatch(buyCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
