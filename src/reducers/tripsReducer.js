import initialState from './initialState';
import { TRANSFER_TRIP, UPDATE_STORE } from '../actions/actionTypes';

const tripsReducer = (state = initialState, action) => {
	switch (action.type) {
		case TRANSFER_TRIP:
			const { readyToGoTrips, terminals } = state;

			if (action.sourceListId === 'readyToGoTrips') {
				const { tripId } = action;

				const trip = readyToGoTrips.find((trip) => trip.id === tripId);

				return {
					...state,
					terminals: terminals.map((terminal) => {
						if (terminal.id === +action.targetListId) {
							terminal.trips.push(trip);
						}

						return terminal;
					}),
					readyToGoTrips: readyToGoTrips.filter((trip) => trip.id !== tripId),
				};
			} else {
				let { sourceListId, targetListId, tripId } = action;

				sourceListId = +sourceListId;
				targetListId = +targetListId;
				const sourceList = terminals.find((terminal) => terminal.id === sourceListId);
				const trip = sourceList.trips.find((trip) => trip.id === tripId);

				return {
					...state,
					terminals: terminals.map((terminal) => {
						if (terminal.id === sourceListId) {
							terminal.trips = terminal.trips.filter((trip) => trip.id !== tripId);
						}

						if (terminal.id === targetListId) {
							terminal.trips.push(trip);
						}

						return terminal;
					})
				};
			}

		case UPDATE_STORE:
			return action.store;

		default:
			return state;
	}
};

export default tripsReducer;
