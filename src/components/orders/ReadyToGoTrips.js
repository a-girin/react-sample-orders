import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TripItem from './TripItem';

class ReadyToGoTrips extends Component {
	componentDidMount() {
		this.props.dragulaContainer.containers.push(this.rtgList);
	}

	render() {
		return (
			<div className="ready-to-go-section">
				<div className="section-heading">Ready-to-go Trips</div>
				<div
					data-id="readyToGoTrips"
					className="rtg-list"
					ref={(el) => this.rtgList = el}
				>
					{this.props.trips.map((trip) => (
						<TripItem trip={trip} type="ready-to-go" key={trip.id}/>
					))}
				</div>
			</div>
		);
	}
}

ReadyToGoTrips.propTypes = {
	trips: PropTypes.arrayOf(PropTypes.object).isRequired,
	dragulaContainer: PropTypes.object.isRequired,
};

export default ReadyToGoTrips;
