import { TRANSFER_TRIP } from './actionTypes';

export const transferTrip = (tripId, sourceListId, targetListId) => ({
	type: TRANSFER_TRIP,
	tripId,
	sourceListId,
	targetListId,
});
