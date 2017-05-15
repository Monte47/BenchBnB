import BenchIndex from './bench_index.jsx';
import { connect } from 'react-redux';
import { asArray } from '../reducers/selectors';
import { fetchBenches } from '../actions/bench_actions';

const mapStateToProps = state => ({
  benches: asArray(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
