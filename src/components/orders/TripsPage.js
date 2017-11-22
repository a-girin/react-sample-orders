import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dragula from 'react-dragula';
import ReadyToGoTrips from './ReadyToGoTrips';
import Terminals from './Terminals';

class TripsPage extends Component {
	componentWillMount() {
		this.dragulaContainer = Dragula({
			revertOnSpill: true,
			copy: true,
			accepts: (el, target) => target.classList.contains('accept-drop'),
		});

		this.dragulaContainer.on('drop', this.handleDrop);
	}

	handleDrop = (el, target, source) => {
		const targetListId = target.dataset.id;
		const sourceListId = source.dataset.id;
		const tripId = el.dataset.id;
		const tripClass = el.classList;

		el.remove();

		if (targetListId === sourceListId) {
			return false;
		}

		if (tripClass.contains('trip-progress')) {
			alert('stop, stupid human');
			return false;
		}

		this.props.transferTrip(tripId, sourceListId, targetListId);
	};

	render() {
		const { terminals, readyToGoTrips } = this.props;

		return (
			<div className="app">
				<div className="page-title">Today Orders</div>
				<section className="trips-container">
					<ReadyToGoTrips trips={readyToGoTrips} dragulaContainer={this.dragulaContainer}/>
					<div className="arrow"/>
					<Terminals terminals={terminals} dragulaContainer={this.dragulaContainer}/>
				</section>
			</div>
		);
	}
}

TripsPage.propTypes = {
	terminals: PropTypes.arrayOf(PropTypes.object).isRequired,
	readyToGoTrips: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TripsPage;
