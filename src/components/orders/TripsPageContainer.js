import { connect } from 'react-redux';
import { transferTrip } from '../../actions/ordersActions';
import TripsPage from './TripsPage';

const mapStateToProps = ({ trips }) => ({
	terminals: trips.terminals,
	readyToGoTrips: trips.readyToGoTrips,
});

export default connect(mapStateToProps, { transferTrip })(TripsPage);
