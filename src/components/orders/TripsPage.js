import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dragula from 'react-dragula';
import ReadyToGoTrips from './ReadyToGoTrips';
import Terminals from './Terminals';
// in real app we can check if local stored state exists and load it from there
import data from '../../data/data.json';

class TripsPage extends Component {
	componentWillMount() {
		this.dragulaContainer = Dragula({
			revertOnSpill: true,
			copy: true,
			moves: (el) => !el.classList.contains('trip-progress'),
			accepts: (el, target) => target.classList.contains('accept-drop'),
		});

		this.dragulaContainer.on('drop', this.handleDrop);
	}

	componentDidMount() {
		// in real app we can check if local stored state exists and load it from there
		setTimeout(() => { // simulating data loading delay
			this.props.updateStore(data);
		}, 1000);
	}

	handleDrop = (el, target, source) => {
		const targetListId = target.dataset.id;
		const sourceListId = source.dataset.id;
		const tripId = el.dataset.id;

		el.remove();

		if (targetListId === sourceListId) {
			return false;
		}

		this.props.transferTrip(tripId, sourceListId, targetListId);
	};

	renderContent = () => {
		const { terminals, readyToGoTrips } = this.props;

		return (
			<div className="app">
				<div className="page-title">Today Orders</div>
				<section className="trips-container">
					<ReadyToGoTrips
						trips={readyToGoTrips}
						dragulaContainer={this.dragulaContainer}
					/>
					<div className="arrow"/>
					<Terminals
						terminals={terminals}
						dragulaContainer={this.dragulaContainer}
					/>
				</section>
			</div>
		);
	};

	renderPreloader = () => {
		return (
			<div className="preloader">loading...</div>
		);
	};

	render() {
		return this.props.terminals.length ? this.renderContent() : this.renderPreloader();
	}
}

TripsPage.propTypes = {
	terminals: PropTypes.arrayOf(PropTypes.object).isRequired,
	readyToGoTrips: PropTypes.arrayOf(PropTypes.object).isRequired,
	transferTrip: PropTypes.func.isRequired,
	updateStore: PropTypes.func.isRequired,
};

export default TripsPage;
