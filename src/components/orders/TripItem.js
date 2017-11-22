import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const formatTripTime = (timestamp) => moment.utc(timestamp).format('HH:mm');

const makeOrderProgressString = (total, done = 0) => `${done}/${total} Order Totes Loaded`;

const TripItem = ({ trip, type }) => {
	const { time, orders, loaded_orders, id, status, title } = trip;

	const tripTime = formatTripTime(time);
	const progress = makeOrderProgressString(orders, loaded_orders);

	return (
		<div data-id={id} className={`trip-wrapper trip-${type}`}>
			<div className={`trip trip-${status}`}>
				<div className="clearfix">
					<div className="trip-title">{title}</div>
					<div className="trip-time">{tripTime}</div>
				</div>
				{type === 'progress' && (
					<div className="trip-loaded">{progress}</div>
				)}
			</div>
		</div>
	);
};

TripItem.propTypes = {
	trip: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired,
};

export default TripItem;
