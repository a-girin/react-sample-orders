import { connect } from 'react-redux';
import * as ordersActions from '../../actions/ordersActions';
import TripsPage from './TripsPage';

const mapStateToProps = ({ trips }) => ({
	terminals: trips.terminals,
	readyToGoTrips: trips.readyToGoTrips,
});

export default connect(mapStateToProps, { ...ordersActions })(TripsPage);
