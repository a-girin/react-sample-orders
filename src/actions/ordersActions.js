import { TRANSFER_TRIP, UPDATE_STORE } from './actionTypes';

export const transferTrip = (tripId, sourceListId, targetListId) => ({
	type: TRANSFER_TRIP,
	tripId,
	sourceListId,
	targetListId,
});

export const updateStore = (store) => ({
	type: UPDATE_STORE,
	store,
});
