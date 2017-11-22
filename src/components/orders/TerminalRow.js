import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TripItem from './TripItem';

const sortByTime = (trip1, trip2) => trip1.time - trip2.time;

class TerminalRow extends Component {
	componentDidMount() {
		this.props.dragulaContainer.containers.push(this.dropContainer, this.tripsList);
	}

	render() {
		const { trips, id, title } = this.props.terminal;

		trips.sort(sortByTime);

		const firstTrip = trips[0];
		const otherTrips = trips.slice(1);

		return (
			<div className="terminal-row">
				<div
					data-id={id}
					className="terminal-title accept-drop"
					ref={(el) => this.dropContainer = el}
				>
					{title}
				</div>
				<div data-id={id} className="trips-list clearfix" ref={(el) => this.tripsList = el}>
					{firstTrip && (
						<TripItem trip={firstTrip} type="progress" key={firstTrip.id}/>
					)}
					{otherTrips.length > 0 && otherTrips.map((trip) => (
						<TripItem trip={trip} type="next" key={trip.id}/>
					))}
				</div>
			</div>
		);
	}
}

TerminalRow.propTypes = {
	terminal: PropTypes.object.isRequired,
	dragulaContainer: PropTypes.object.isRequired,
};

export default TerminalRow;
